const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    console.log('Connected!');
  })
  .catch(err => {
    console.log('ERROR');
    console.log(err);
  })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('app is listening on port 3000!');
})
