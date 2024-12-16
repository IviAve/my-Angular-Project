const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { transportController } = require('../controllers');

// middleware that is specific to this router

router.get('/', transportController.getTransports);
router.post('/', auth(), transportController.createTransport);

router.get('/:transportId', transportController.getTransport);



router.put('/:transportId/subscribe', auth(), transportController.subscribe);

router.put('/:transportId', auth(), transportController.editTransport);
router.delete('/:transportId', auth(), transportController.deleteTransport);

// Добавяне на коментар към транспорт
router.post('/transports/:transportId/comments', auth(), transportController.addCommentToTransport);
// Пример за сървърен маршрут за получаване на коментари
router.get('/transports/:transportId/comments', auth(), transportController.getComments);

// Изтриване на коментар от транспорт
router.delete('/transports/:transportId/comments/:commentId', auth(), transportController.deleteCommentFromTransport);

//router.get('/last-three',furnitureController.getLastThreeItems)

// router.put('/:furnitureId/posts/:postId', auth(), postController.editPost);
// router.delete('/:furnitureId/posts/:postId', auth(), postController.deletePost);


 

module.exports = router