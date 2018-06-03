const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../public'));

app.listen(3002, () => console.log('Listening on port 3002'))