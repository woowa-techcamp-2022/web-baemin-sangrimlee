const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { session } = req;
  res.render('index', { title: 'My배민', headerTitle: 'My배민', session });
});

router.get('/sign-in', (req, res) => {
  const { session } = req;
  if (session) {
    res.redirect('/');
  }
  res.render('sign-in', { title: '로그인' });
});

module.exports = router;
