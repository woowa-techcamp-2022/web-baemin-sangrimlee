const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'My배민' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: '로그인' });
});
module.exports = router;
