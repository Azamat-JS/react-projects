require('dotenv').config()
const express =  require('express');
const cors = require('cors')
const ImageKit = require("imagekit");
const mongoose = require('mongoose');
const Chat = require('./models/chat')
const UserChats = require('./models/userChats');
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
    credentials:true,
    origin: "http://localhost:5173"
}));

app.use(express.json())

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(error)
    }
}

const imagekit = new ImageKit({
    publicKey : process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey : process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGE_KIT_ENDPOINT
});

app.get('/api/upload', (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

// app.get('/api/test', ClerkExpressRequireAuth(), (req, res)=> {
//     res.send('Success!')
//     const { userId } = req.auth;
//     console.log(userId)
// })

app.post('/api/chats', ClerkExpressRequireAuth(), async (req, res) => {
  const { text} = req.body;
  const { userId } = req.auth;

  try {
    // Create a new Chat
    const newChat = new Chat({
        userId: userId,
        history: [{role: "user", parts: [{text}]}]
    });

    const savedChat = await newChat.save();

    //  CHECK IF THE USERCHATS EXISTS
    const userChats = await UserChats.find({userId: userId});

    // IF DOESN'T EXIST CREATE A NEW ONE AND ADD THE CHAT IN THE CHATS ARRAY
    if(!userChats.length){
        const newUserChats = new UserChats ({
            userId: userId,
            chats: [
                {
                    _id: savedChat._id,
                    title: text.substring(0, 20)
                }
            ]
        })
        await newUserChats.save()
    }else{
        // IF EXISTS, PUSH THE CHAT TO THE EXISTING ARRAY
        await UserChats.updateOne({userId:userId}, {
            $push:{
                chats:{
                    _id: savedChat._id,
                    title: text.substring(0, 20)
                }
            }
        });

        res.status(201).send(newChat._id)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
        message: 'Failed to create a new chat'
    })
  }
})

app.get("/api/userchats", ClerkExpressRequireAuth(), async (req, res) => {
    const userId = req.auth.userId;

    try {
        const foundUser = await UserChats.find({userId})
        res.status(200).send(foundUser[0].chats)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error fetching users')
    }
})

app.get("/api/chats/:id", ClerkExpressRequireAuth(), async (req, res) => {
    const userId = req.auth.userId;

    try {
        const chat = await Chat.findOne({_id: req.params.id, userId})
        res.status(200).send(chat)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error fetching chat')
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(401).send('Unauthenticated!')
})

app.listen(port, () => {
    connect()
    console.log("Server is running on port: " + port)
})