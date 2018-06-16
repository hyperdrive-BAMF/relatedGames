
/*
// Colors:
// rgba( 0, 0, 0, 0.2 );
// off hover: 
// title text color: #c7d5e0;
// categories & platform icons text color, on hover: #384959;

// this is for the background of the site
// linear-gradient( to bottom, rgba(42,71,94,1.0) 5%, rgba(42,71,94,0.0) 70%)   
//https://s3-us-west-1.amazonaws.com/steam-game-images1/

*/


// var MongoClient = require('mongodb').MongoClient;
// let getFilteredData = (callback) => {
//   MongoClient.connect(uri, function(err, client) {
//     if(err) return console.log('error in MongoClient:', err)
//    const collection = client.db("test").collection("gamelists");
//    // perform actions on the collection object
//     collection.find({}).limit(12).exec(function(err, data){
//       if(err) {
//         console.log('filter error');
//         return callback(err, null)
//       }
//       console.log('got data from db:', data)
//       callback(null, data)
//       client.close();
//     });
   
//   });
// }

//

// let save = (data) => {
//   mongoose.connect('mongodb://localhost/gamesListStore');
//   var db = mongoose.connection;
//   db.on('error', () => console.log('error connecting to DB'));
//   db.once('open', function(){
//     gameList.insertMany(data, (function(err) {
//       if(err){
//         return console.log(err);
//       }
//       console.log('saved!')
//       db.close();
//     }));
//   });
// }
// //save(data);