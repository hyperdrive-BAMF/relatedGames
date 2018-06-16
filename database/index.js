const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const path = process.env.dbPath || 'mongodb://localhost/gamesListStore';

let gameListSchema = new mongoose.Schema({
  title: String,
  logoURL: String,
  logoFileName: String,
  price: Number,
  description: String,
  categories: Object,
  screenshots: Object
});

gameListSchema.plugin(random);

let gameList = mongoose.model('gameList', gameListSchema);

let getFilteredData = (callback) => {
  mongoose.connect(path);
  var db = mongoose.connection;
  db.on('error', () => console.log('error connecting to DB on filter'));
  db.once('open', function(){
    gameList.findRandom({},{},{limit: 12}, function(err, data) {
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


