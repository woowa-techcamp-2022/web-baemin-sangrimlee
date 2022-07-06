const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'My배민' });
});

router.get('/sign-in', (req, res) => {
  res.render('sign-in', { title: '로그인' });
});
module.exports = router;
