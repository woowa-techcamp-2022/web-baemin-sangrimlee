const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/sign-up/agree');
});

router.get('/agree', (req, res) => {
  res.render('sign-up/agree', { title: '회원가입', headerTitle: '회원가입' });
});

module.exports = router;
