const express = require('express');
const router = express.Router();
const { Page } = require('../models');
const { addPage } = require('../views');
module.exports = router;

router.get('/', (req, res, next) => {
  try {
    res.redirect('/');
  } catch (error) {
    res.status(404).send('Not Found 404 Error!!!');
  }
});

router.post('/', async (req, res, next) => {
  //assocations....

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    slug: req.body.slug
  });

  try {
    await page.save();
    console.log('=======>>>>', page);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
  // res.send('got to POST /wiki/');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});
