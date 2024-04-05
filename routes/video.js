const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    title: String,
    description: String,
    media: {
        type: String,
        required: [true, "Media is required to upload a video"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, "Video cant be uploaded without user"]
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }]
})


module.exports = mongoose.model('video', videoSchema)
