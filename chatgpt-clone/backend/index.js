require('dotenv').config()
const express =  require('express');
const cors = require('cors')
const ImageKit = require("imagekit");

const port = process.env.PORT || 3000;
const app = express();

app.use(cors())

const imagekit = new ImageKit({
    publicKey : process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey : process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGE_KIT_ENDPOINT
});

app.get('/api/upload', (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})



app.listen(port, () => {
    console.log("Server is running on port: " + port)
})