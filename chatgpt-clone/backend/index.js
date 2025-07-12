require('dotenv').config()
const express =  require('express');
const cors = require('cors')
const ImageKit = require("imagekit");
const mongoose = require('mongoose')

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

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

app.post('/api/chats', (req, res) => {
  const {text} = req.body
  console.log(text)
})



app.listen(port, () => {
    connect()
    console.log("Server is running on port: " + port)
})