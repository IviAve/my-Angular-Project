const { userModel, furnitureModel, commentModel } = require('../models');

function newComment(text, userId, furnitureId) {
    return commentModel.create({ text, userId, furnitureId })
        .then(comment => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { comments: comment._id }, $addToSet: { furnitures: furnitureId } }),
                furnitureModel.findByIdAndUpdate({ _id: furnitureId }, { $push: { comments: comment._id }, $addToSet: { subscribers: userId } }, { new: true })
            ])
        })
}

function getLatestsComments(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    commentModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('furnitureId userId')
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(next);
}

function createComment(req, res, next) {
    const { furnitureId } = req.params;
    const { _id: userId } = req.user;
    const { commentText } = req.body;

    newComment(commentText, userId, furnitureId)
        .then(([_, updatedFurniture]) => res.status(200).json(updatedFurniture))
        .catch(next);
}

function editComment(req, res, next) {
    const { commentId } = req.params;
    const { commentText } = req.body;
    const { _id: userId } = req.user;

    // if the userId is not the same as this one of the post, the post will not be updated
    postModel.findOneAndUpdate({ _id: commentId, userId }, { text: commentText }, { new: true })
        .then(updatedPost => {
            if (updatedPost) {
                res.status(200).json(updatedPost);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deleteComment(req, res, next) {
    const { commentId, furnitureId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        postModel.findOneAndDelete({ _id: commentId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { comments: commentId } }),
        furnitureModel.findOneAndUpdate({ _id: furnitureId }, { $pull: { comments: commentId} }),
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

// function like(req, res, next) {
//     const { postId } = req.params;
//     const { _id: userId } = req.user;

//     console.log('like')

//     postModel.updateOne({ _id: postId }, { $addToSet: { likes: userId } }, { new: true })
//         .then(() => res.status(200).json({ message: 'Liked successful!' }))
//         .catch(next)
// }

module.exports = {
    getLatestsComments,
    newComment,
    createComment,
    editComment,
    deleteComment,
    //like,
}
