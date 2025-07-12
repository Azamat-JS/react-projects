require('dotenv').config()
const express =  require('express');
const cors = require('cors')
const ImageKit = require("imagekit");
const mongoose = require('mongoose');
const Chat = require('./models/chat')
const UserChats = require('./models/userChats')

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

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

app.post('/api/chats', async (req, res) => {
  const {userId, text} = req.body;

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
        });
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



app.listen(port, () => {
    connect()
    console.log("Server is running on port: " + port)
})