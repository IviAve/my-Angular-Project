const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    // likes: [{
    //     type: ObjectId,
    //     ref: "User"
    // }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    furnitureId: {
        type: ObjectId,
        ref: "Furniture"
    },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
