const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;




const furnitureSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Category is required.'],
        minlength: [4, 'Category must be at least 4 characters long.'],
      },
      condition: {
        type: String,
        required: [true, 'Condition is required.'],
        minlength: [4, 'Condition must be at least 4 characters long.'],
      },
      delivery: {
        type: String,
        required: [true, 'Delivery information is required.'],
        minlength: [5, 'Delivery information must be at least 5 characters long.'],
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
        minlength: [5, 'Phone number must be at least 5 digits long.'],
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

  comment: [{
            type: ObjectId,
            ref: "Comments"
        }],
}, { timestamps: true });

module.exports = mongoose.model('Furniture', furnitureSchema);
