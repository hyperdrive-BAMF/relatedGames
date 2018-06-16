const express = require('express');
const databaseHandler = require('../database/index.js')
const port = process.env.PORT || 3002;
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(__dirname + '/../public'));

app.get('/games', (req, res) => {
  databaseHandler.getFilteredData((err, data) => {
    if(err){
      res.status(500).send('error retrieving data', err);
      return console.log('error retrieving data', err)
    }
    console.log('got data!',data)
    res.status(200).send(data)
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
