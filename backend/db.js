const mongoose = require('mongoose');
const mongourl = "mongodb+srv://ravimathuriya777:Ravi@1507@cluster0.vpw1h.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"


const connecttomongoose = () =>{
    mongoose.connect(mongourl)
  .then(() => console.log('Connected!'));

}

module.exports = connecttomongoose;
