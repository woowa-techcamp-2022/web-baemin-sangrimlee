const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/sign-in', {
    title: '로그인',
    headerRightLink: 'close',
    headerRightHref: '/',
  });
});

module.exports = router;
