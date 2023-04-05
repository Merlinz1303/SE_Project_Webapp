const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  name: String,
  Color: String,
  Image: String,
  Price: Number

});

const CarModel = mongoose.model('cars', carSchema);

module.exports = CarModel;