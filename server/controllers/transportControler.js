const { transportModel } = require('../models');
const {userModel} = require('../models');

//const {comments} = require('../models'); // Импортиране на модела за коментарите

// Друг код, който използва тези модели




function createTransport(req, res, next) {
    const { name, type, capacity, price, location, phone, imageUrl, summary } = req.body;
    const { _id: userId } = req.user; // Извличаме ID-то на текущия потребител

    
    transportModel.create({
        name,
        type,
        capacity,
        price,
        location,
        phone,
        imageUrl,
        summary,
        userId,  // Свързваме мебелта с текущия потребител
        subscribers: []  // Потребителят ще бъде в масива subscribers
    })
    .then(transport => {
        // След създаването на мебелта, добавяме новосъздадената мебел в масива furnitures на потребителя
        userModel.findByIdAndUpdate(
            userId,
            { $push: { transports: transport._id } },  // Добавяме ID-то на мебелта към furnitures
            { new: true }
        )
        .then(updatedUser => {
            // След актуализирането на потребителя, връщаме потребителя с всички мебели
            userModel.findById(userId)
                .populate('transports')  // Попълваме мебелите с техните данни
                .then(user => {
                    res.status(201).json(user);  // Връщаме потребителя с мебелите
                })
                .catch(next);
        })
        .catch(next);
    })
    .catch(next);
}



// test for last three on homepage
function getTransports(req, res, next) {
    const limit = Number(req.query.limit) || 10;
  
    transportModel.find()
    .populate('userId')
      .sort({ createdAt: -1 })
      .limit(limit)
      .then(transports => {
        if (transports.length === 0) {
          return res.status(200).json({ message: "No transport items found.",transports: [] });
        }
        res.status(200).json(transports);
      })
      .catch(next);
  }
  


// Функция за получаване на конкретна мебел
function getTransport(req, res, next) {
    const { transportId } = req.params;
    //console.log('Furniture from server ID:', furnitureId); // Лог за ID-то

    transportModel.findById(transportId)
    
    .populate('userId')
        .populate('comments')  // Попълваме коментарите  // Попълваме данните за потребителя
        .then(transport => {
            if(!transport){
                return res.status(404).json({ message: 'Transport not found' });
            }
                res.json(transport);
        })
        .catch(next);
        
}

// Функция за редактиране на transport
function editTransport(req, res, next) {
    const { transportId } = req.params;  // ID на transport
    const { name, type, capacity, price, location, phone, imageUrl, summary } = req.body;  
    const { _id: userId } = req.user;  // ID на текущия потребител

    // Намиране на transport по ID и проверка дали тя принадлежи на текущия потребител
    transportModel.findOneAndUpdate(
        { _id: transportId, userId },  // Намираме transport по ID и проверяваме дали тя принадлежи на текущия потребител
        {
            name,
            type,
            capacity,
            price,
            location,
            phone,
            imageUrl,
            summary
        },
        { new: true }  //
    )
    .then(updatedTransport => {
        if (updatedTransport) {
            res.status(200).json(updatedTransport);  
        } else {
            res.status(401).json({ message: 'You are not authorized to update this transport' });  // Ако не можем да намерим мебелта или тя не принадлежи на потребителя
        }
    })
    .catch(next);  // Ако има грешка, тя се предава към middleware за грешки
}






function deleteTransport(req, res, next) {
        const { transportId } = req.params;
        const { _id: userId } = req.user;
    
        Promise.all([
            transportModel.findOneAndDelete({ _id: transportId, userId }),
            userModel.findOneAndUpdate({ _id: userId }, { $pull: { transports: transportId } }),
            transportModel.findOneAndUpdate({ _id: transportId }, { $pull: { transports: transportId } }),
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
    const transportId = req.params.transportId;
    const { _id: userId } = req.user;
    transportModel.findByIdAndUpdate({ _id: transportId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedTransport => {
            res.status(200).json(updatedTransport)
        })
        .catch(next);
}






// function addCommentToTransport(req, res, next) {
//     const { transportId } = req.params;
//     const { _id: userId } = req.user;  // Извличаме ID на потребителя от request-а
//     const { commentText } = req.body;  // Извличаме текста на коментара от body-то на заявката

//     // Създаване на нов коментар
//     const newComment = {
//         text: commentText,
//         userId,  // Свързваме коментара с потребителя
//         transportId,  // Свързваме коментара с конкретния транспорт
//         createdAt: new Date()  // Добавяме времето на създаване на коментара
//     };

//     // Добавяме коментара към транспорта
//     transportModel.findByIdAndUpdate(
//         transportId, 
//         { $push: { comments: newComment } },  // Добавяме новия коментар в масива с коментари на транспорта
//         { new: true }
//     )
//     .then(updatedTransport => {
//         if (!updatedTransport) {
//             return res.status(404).json({ message: 'Transport not found' });
//         }
//         res.status(200).json(updatedTransport);  // Връщаме актуализирания транспорт
//     })
//     .catch(next);  // Прехвърляне на грешката към middleware-а за грешки
// }

// function deleteCommentFromTransport(req, res, next) {
//     const { transportId, commentId } = req.params;  // Извличаме ID на транспорт и коментар от URL параметрите
//     const { _id: userId } = req.user;  // Извличаме ID на потребителя

//     // Намираме и изтриваме коментара
//     transportModel.findByIdAndUpdate(
//         transportId,
//         { $pull: { comments: { _id: commentId, userId } } },  // Изтриваме коментара, ако той принадлежи на потребителя
//         { new: true }
//     )
//     .then(updatedTransport => {
//         if (!updatedTransport) {
//             return res.status(404).json({ message: 'Transport not found or comment not found' });
//         }
//         res.status(200).json(updatedTransport);  // Връщаме актуализирания транспорт
//     })
//     .catch(next);  // Прехвърляне на грешката към middleware-а за грешки
// }

// // Функция за получаване на всички коментари към транспорт
// function getComments(req, res, next) {
//     const { transportId } = req.params;  // Извличаме ID на транспорта от URL параметрите

//     // Намираме транспорт по ID и попълваме коментарите
//     transportModel.findById(transportId)
//         .populate('comments')  // Попълваме данни за коментарите
//         .then(transport => {
//             if (!transport) {
//                 return res.status(404).json({ message: 'Transport not found' });
//             }
//             res.status(200).json(transport.comments);  // Връщаме само коментарите
//         })
//         .catch(next);  // Прехвърляне на грешката към middleware-а за грешки
// }


module.exports = {
    getTransports,
    createTransport,
    getTransport,
    subscribe,
    editTransport,
    deleteTransport,
    // addCommentToTransport,
    // deleteCommentFromTransport,
    // getComments,
    
}
