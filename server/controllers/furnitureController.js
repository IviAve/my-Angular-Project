const { furnitureModel } = require('../models');
const {userModel} = require('../models');
//const { newPost } = require('./postController')

// function getFurnitures(req, res, next) {
//     furnitureModel.find()
//         .populate('userId')
//         .then(furnitures => res.json(furnitures))
//         .catch(next);
// }

// // function getFurniture(req, res, next) {
// //     const { furnitureId } = req.params;

// //     furnitureModel.findById(furnitureId)
// //         .populate({
// //            // path : 'comments',
// //             populate : {
// //               path : 'userId'
// //             }
// //           })
// //         .then(furniture => res.json(furniture))
// //         .catch(next);
// // }


// function getFurniture(req, res, next) {
//     const { furnitureId } = req.params;
//     console.log('Furniture ID:', furnitureId); // Лог за ID-то

//     furnitureModel.findById(furnitureId)
//         .populate({
           
//               path : 'userId',
              
            
//           })
//         .then(furniture => res.json(furniture))
//         .catch(next);
// }

// function createFurniture(req, res, next) {
//     const { category, condition, delivery, location, phone, imageUrl, summary } = req.body;
//     const { _id: userId } = req.user;

//     furnitureModel.create({
//         category,
//         condition,
//         delivery,
//         location,
//         phone,
//         imageUrl,
//         summary,
//         userId,
        
//         subscribers: [userId]
//     })
//     // .then(furniture => {
//     //     // Създаване на първоначален пост за новата тема
//     //     newPost(comment, userId, furniture._id)
//     //         .then(([_, updatedFurniture]) => res.status(200).json(updatedFurniture))
//     // })

//     .then(furniture => {
        
//         res.status(201).json(furniture); // Връщаме новосъздадената мебел
//     })
//     .catch(next); 
    
// }



// new controler from gpt

//const { furnitureModel, userModel } = require('../models');  // Импортираме моделите

// Функция за създаване на мебел
function createFurniture(req, res, next) {
    const { category, condition, delivery, location, phone, imageUrl, summary } = req.body;
    const { _id: userId } = req.user; // Извличаме ID-то на текущия потребител

    // Създаване на новата мебел
    furnitureModel.create({
        category,
        condition,
        delivery,
        location,
        phone,
        imageUrl,
        summary,
        userId,  // Свързваме мебелта с текущия потребител
        subscribers: [userId]  // Потребителят ще бъде в масива subscribers
    })
    .then(furniture => {
        // След създаването на мебелта, добавяме новосъздадената мебел в масива furnitures на потребителя
        userModel.findByIdAndUpdate(
            userId,
            { $push: { furnitures: furniture._id } },  // Добавяме ID-то на мебелта към furnitures
            { new: true }
        )
        .then(updatedUser => {
            // След актуализирането на потребителя, връщаме потребителя с всички мебели
            userModel.findById(userId)
                .populate('furnitures')  // Попълваме мебелите с техните данни
                .then(user => {
                    res.status(201).json(user);  // Връщаме потребителя с мебелите
                })
                .catch(next);
        })
        .catch(next);
    })
    .catch(next);
}

// Функция за получаване на всички мебели
function getFurnitures(req, res, next) {
    furnitureModel.find()
        .populate('userId')  // Попълваме данните за потребителя
        .then(furnitures => res.json(furnitures))
        .catch(next);
}

// Функция за получаване на конкретна мебел
function getFurniture(req, res, next) {
    const { furnitureId } = req.params;
    //console.log('Furniture from server ID:', furnitureId); // Лог за ID-то

    furnitureModel.findById(furnitureId)
        .populate('userId')  // Попълваме данните за потребителя
        .then(furniture => {
            if(!furniture){
                return res.status(404).json({ message: 'Furniture not found' });
            }
                res.json(furniture);
        })
        .catch(next);
        
}

// Функция за редактиране на мебел
function editFurniture(req, res, next) {
    const { furnitureId } = req.params;  // ID на мебелта
    const { category, condition, delivery, location, phone, imageUrl, summary } = req.body;  // Новите данни за мебелта
    const { _id: userId } = req.user;  // ID на текущия потребител

    // Намиране на мебелта по ID и проверка дали тя принадлежи на текущия потребител
    furnitureModel.findOneAndUpdate(
        { _id: furnitureId, userId },  // Намираме мебелта по ID и проверяваме дали тя принадлежи на текущия потребител
        {
            category,
            condition,
            delivery,
            location,
            phone,
            imageUrl,
            summary
        },
        { new: true }  // Връща обновената мебел след обновяване
    )
    .then(updatedFurniture => {
        if (updatedFurniture) {
            res.status(200).json(updatedFurniture);  // Връщаме обновената мебел
        } else {
            res.status(401).json({ message: 'You are not authorized to update this furniture' });  // Ако не можем да намерим мебелта или тя не принадлежи на потребителя
        }
    })
    .catch(next);  // Ако има грешка, тя се предава към middleware за грешки
}

module.exports = {
    createFurniture,
    getFurnitures,
    getFurniture,
    editFurniture
};










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
