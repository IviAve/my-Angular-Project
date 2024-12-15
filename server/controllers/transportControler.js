const { transportModel } = require('../models');
const {userModel} = require('../models');
const { newComment } = require('./commentController')



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
        subscribers: [userId]  // Потребителят ще бъде в масива subscribers
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
    const limit = Number(req.query.limit) || 0;
  
    transportModel.find()
    .populate('userId')
      .sort({ createdAt: -1 })
      .limit(limit)
      .then(transports => {
        if (transports.length === 0) {
          return res.status(404).json({ message: "No transport items found." });
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

module.exports = {
    getTransports,
    createTransport,
    getTransport,
    subscribe,
    editTransport,
    deleteTransport,
    
}
