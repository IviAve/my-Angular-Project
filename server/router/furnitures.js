const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { furnitureController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', furnitureController.getFurnitures);
router.post('/', auth(), furnitureController.createFurniture);

router.get('/:furnitureId', furnitureController.getFurniture);

//router.post('/:furnitureId', auth(), postController.createPost);

router.put('/:furnitureId', auth(), furnitureController.subscribe);

//router.put('/:furnitureeId/posts/:postId', auth(), postController.editPost);
//router.delete('/:furnitureId/posts/:postId', auth(), postController.deletePost);

 //router.get('/my-trips/:id/reservations', auth(), furnitureController.getReservations);

module.exports = router