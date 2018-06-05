const mongoose = require('mongoose');
const data = require('../client/dummyData.js')

let gameListSchema = mongoose.Schema({
  title: String,
  logoURL: String,
  logoFileName: String,
  price: Number,
  hoursOnRecord: Number,
  description: String,
  categories: Object,
  screenshots: Object
});

let gameList = mongoose.model('gameList', gameListSchema);

let save = (data) => {
  mongoose.connect('mongodb://localhost/gamesListStore');
  var db = mongoose.connection;
  db.on('error', () => console.log('error connecting to DB'));
  db.once('open', function(){
    gameList.insertMany(data, (function(err) {
      if(err){
        return console.log(err);
      }
      console.log('saved!')
      db.close();
    }));
  });
}

let getFilteredData = (callback) => {
  mongoose.connect('mongodb://localhost/gamesListStore');
  var db = mongoose.connection;
  db.on('error', () => console.log('error connecting to DB on filter'));
  db.once('open', function(){
    gameList.find({}).sort({'hoursOnRecord': -1}).limit(5).exec(function(err, data){
      if(err) {
        return console.log('filter err', err);
      }
      callback(data)
      db.close();
    })
  })
}

module.exports.getFilteredData = getFilteredData;
module.exports.save = save;


