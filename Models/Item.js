const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    default: 'Indonesia',
  },
  description: {
    type: String,
    required: true,
  },
  isPopular: {
    type: String,
  },
  imageId: [
    {
      type: ObjectId,
      ref: 'Image',
    },
  ],
  featureId: [
    {
      type: ObjectId,
      ref: 'Feature',
    },
  ],
  activityId: [
    {
      type: ObjectId,
      ref: 'Activity',
    },
  ],
});

module.exports = mongoose.model('Item', itemSchema);
