const mongoose = require('mongoose');
const mongourl = "mongodb://localhost:27017/test"


const connecttomongoose = () =>{
    mongoose.connect(mongourl)
  .then(() => console.log('Connected!'));

}

module.exports = connecttomongoose;
