const express = require('express');
const databaseHandler = require('../database/index.js')
const app = express();

app.use(express.static(__dirname + '/../public'));

app.get('/games', (req, res) => {
  databaseHandler.getFilteredData((err, data) => {
    if(err){
      return console.log('error retrieving data', err)
    }
    console.log('got data!')
    res.status(200).send(data)
  })
})

app.listen(3002, () => console.log('Listening on port 3002'))