const { furnitureModel } = require('../models');
const {userModel} = require('../models');
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
           
              path : 'userId',
              
            
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



function editFurniture(req, res, next) {
    const { furnitureId } = req.params;  // ID на мебелта
    const { category, condition, delivery, location, phone, imageUrl, summary } = req.body;  // Новите данни за мебелта
    const { _id: userId } = req.user;  // ID на текущия потребител

    // Намиране на мебелта по ID и проверка дали тя принадлежи на текущия потребител
    furnitureModel
        .findById(furnitureId)
        .then(furniture => {
            if (!furniture) {
                return res.status(404).json({ message: 'Furniture not found' });
            }

            // Проверка дали текущият потребител е собственик на мебелта
            if (furniture.userId.toString() !== userId.toString()) {
                return res.status(403).json({ message: 'You are not authorized to edit this furniture' });
            }

            // Обновяване на полетата на мебелта
            furniture.category = category || furniture.category;
            furniture.condition = condition || furniture.condition;
            furniture.delivery = delivery || furniture.delivery;
            furniture.location = location || furniture.location;
            furniture.phone = phone || furniture.phone;
            furniture.imageUrl = imageUrl || furniture.imageUrl;
            furniture.summary = summary || furniture.summary;

            // Записване на промените в базата данни
            return furniture.save();
        })
        .then(updatedFurniture => {
            res.status(200).json(updatedFurniture);  // Връщане на обновената мебел
        })
        .catch(next);  // Ако има грешка, тя се предава към middleware за грешки
}



function deleteFurniture(req, res, next) {
        const { furnitureId } = req.params;
        const { _id: userId } = req.user;
    
        Promise.all([
            furnitureModel.findOneAndDelete({ _id: furnitureId, userId }),
            userModel.findOneAndUpdate({ _id: userId }, { $pull: { furnitures: furnitureId } }),
            furnitureModel.findOneAndUpdate({ _id: furnitureId }, { $pull: { furnitures: furnitureId } }),
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
    editFurniture,
    deleteFurniture,
}
