const mongoose = require('mongoose');
//const data = require('../client/dummyData.js');

const path = process.env.dbPath || 'mongodb://localhost/gamesListStore';

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

let getFilteredData = (callback) => {
  mongoose.connect(path);
  var db = mongoose.connection;
  db.on('error', () => console.log('error connecting to DB on filter'));
  db.once('open', function(){
    gameList.find({}).sort({'price': -1}).limit(12).exec(function(err, data){
      if(err) {
        console.log('filter error');
        return callback(err, null)
      }
      callback(null, data)
      db.close();
    })
  })
}

module.exports.getFilteredData = getFilteredData;
//module.exports.save = save;


