const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const layout = require('./views/layout')
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(layout());
});

const PORT = '3000';
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
