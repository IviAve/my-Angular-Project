const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { transportController, commentController } = require('../controllers');

// middleware that is specific to this router

router.get('/', transportController.getTransports);
router.post('/', auth(), transportController.createTransport);

router.get('/:transportId', transportController.getTransport);

router.post('/:transportId/comments', auth(), commentController.createComment);

router.put('/:transportId/subscribe', auth(), transportController.subscribe);

router.put('/:transportId', auth(), transportController.editTransport);
router.delete('/:transportId', auth(), transportController.deleteTransport);


//router.get('/last-three',furnitureController.getLastThreeItems)

// router.put('/:furnitureId/posts/:postId', auth(), postController.editPost);
// router.delete('/:furnitureId/posts/:postId', auth(), postController.deletePost);


 

module.exports = router