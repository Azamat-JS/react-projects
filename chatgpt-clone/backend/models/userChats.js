const mongoose = require('mongoose');

const userChatsSchema = new mongoose.Schema({
    userId: {
        type:String,
        required: [true, 'User id must be provided']
    },

    chats: [
        {
            _id:{
                type:String,
                required: [true, 'Chat id must be provided'],
            },
            title:{
                type:String,
                required: [true, 'Chat title id must be provided'],
            },
            createdAt:{
                type:Date,
                default: Date.now()
            },
        }
    ]
}, {timestamps: true, versionKey: false});

module.exports = mongoose.model('UserChats', userChatsSchema)