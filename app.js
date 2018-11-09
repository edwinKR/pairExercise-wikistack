const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const layout = require('./views/layout');
const { db } = require('./models');
const models = require('./models');
const app = express();
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send(layout());
});

db.authenticate().then(() => {
  console.log('connected to the database!!!');
});

const PORT = '3000';

const init = async () => {
  await models.db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
  });
};

init();
