const express = require('express');
const router = express.Router();
const { addPage } = require('../views');
module.exports = router;

router.get('/', (req, res, next) => {
  try {
    res.redirect('/');
  } catch (error) {
    res.status(404).send('Not Found 404 Error!!!');
  }
});

router.post('/', (req, res, next) => {
  res.send('got to POST /wiki/');
});

router.get('/add', (req, res, next) => {
  console.log('=========req.bodty====', req.body);
  res.send(addPage());
});
