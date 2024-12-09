const { furnitureModel } = require('../models');
//const { newPost } = require('./postController')

function getFurnitures(req, res, next) {
    furnitureModel.find()
        .populate('userId')
        .then(furnitures => res.json(furnitures))
        .catch(next);
}

// function getFurniture(req, res, next) {
//     const { furnitureId } = req.params;

//     furnitureModel.findById(furnitureId)
//         .populate({
//            // path : 'comments',
//             populate : {
//               path : 'userId'
//             }
//           })
//         .then(furniture => res.json(furniture))
//         .catch(next);
// }


function getFurniture(req, res, next) {
    const { furnitureId } = req.params;

    furnitureModel.findById(furnitureId)
        .populate({
           
              path : 'userId'
            
          })
        .then(furniture => res.json(furniture))
        .catch(next);
}

function createFurniture(req, res, next) {
    const { category, condition, delivery, location, phone, imageUrl, summary } = req.body;
    const { _id: userId } = req.user;

    furnitureModel.create({
        category,
        condition,
        delivery,
        location,
        phone,
        imageUrl,
        summary,
        userId,
        subscribers: [userId]
    })
    // .then(furniture => {
    //     // Създаване на първоначален пост за новата тема
    //     newPost(comment, userId, furniture._id)
    //         .then(([_, updatedFurniture]) => res.status(200).json(updatedFurniture))
    // })

    .then(furniture => {
        
        res.status(201).json(furniture); // Връщаме новосъздадената мебел
    })
    .catch(next); 
    
}


function subscribe(req, res, next) {
    const furnitureId = req.params.furnitureId;
    const { _id: userId } = req.user;
    furnitureModel.findByIdAndUpdate({ _id: furnitureId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedFurniture => {
            res.status(200).json(updatedFurniture)
        })
        .catch(next);
}

module.exports = {
    getFurnitures,
    createFurniture,
    getFurniture,
    subscribe,
}
