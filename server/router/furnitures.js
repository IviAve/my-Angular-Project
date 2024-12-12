const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { furnitureController, commentController } = require('../controllers');

// middleware that is specific to this router

router.get('/', furnitureController.getFurnitures);
router.post('/', auth(), furnitureController.createFurniture);

router.get('/:furnitureId', furnitureController.getFurniture);

router.post('/:furnitureId/comments', auth(), commentController.createComment);

router.put('/:furnitureId/subscribe', auth(), furnitureController.subscribe);

router.put('/:furnitureId', auth(), furnitureController.editFurniture);
router.delete('/:furnitureId', auth(), furnitureController.deleteFurniture);


//router.get('/last-three',furnitureController.getLastThreeItems)

// router.put('/:furnitureId/posts/:postId', auth(), postController.editPost);
// router.delete('/:furnitureId/posts/:postId', auth(), postController.deletePost);


 //router.get('/my-trips/:id/reservations', auth(), furnitureController.getReservations);

module.exports = router