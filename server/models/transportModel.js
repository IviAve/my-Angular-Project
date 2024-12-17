const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;




const transportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        minlength: [3, 'Name must be at least 3 characters long.'],
      },
      type: {
        type: String,
        required: [true, 'Type is required.'],
        minlength: [3, 'Type must be at least 3 characters long.'],
      },
      capacity: {
        type: String,
        required: [true, 'Capacity is required.'],
        minlength: [3, 'Capacity must be at least 3 characters long.'],
      },
      price: {
        type: Number, // С главна буква
        required: [true, 'Price is required.'], // Съобщение за липсваща стойност
        min: [1, 'Price must be at least 1.'] // Съобщение за минимална стойност
      },
      location: {
        type: String,
        required: [true, 'Location is required.'],
        minlength: [3, 'Location must be at least 3 characters long.'],
      },
      phone: {
        type: String,
        required: [true, 'Phone number is required.'],
        match: [/^\d+$/, 'Phone number must contain only digits.'],
        minlength: [9, 'Phone number must be at least 9 digits long.'],
      },
      imageUrl: {
        type: String,
        required: [true, 'Image URL is required.'],
        validate: {
          validator: function (v) {
            return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i.test(v);
          },
          message: 'Invalid image URL format.',
        },
      },
      
      summary: {
        type: String,
        required: [true, 'Summary is required.'],
        minlength: [10, 'Summary must be at least 10 characters long.'],
      },

      userId: {
        type: ObjectId,
       ref: "User"
      },
      subscribers: [{
        type: ObjectId,
        ref: "User"
    }],

  // comments: [{
  //           type: ObjectId,
  //           ref: "Comments"
  //       }],
}, { timestamps: true });

module.exports = mongoose.model('Transport', transportSchema);
