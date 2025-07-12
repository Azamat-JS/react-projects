const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    userId: {
        type:String,
        required: [true, 'User id must be provided']
    },

    history: [
        {
            role:{
                type:String,
                enum: ["user" | "model"],
                required: [true, 'Role must be provided'],
            },
            parts:[
                {
                    text:{
                        type:String,
                        required: [true, 'Text must be provided'],
                    },
                }
            ],
            img: {
                type: String,
                required: false,
            }
        }
    ]
}, {timestamps: true, versionKey: false});

module.exports = mongoose.model('Chat', chatSchema)