const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { session } = req;
  res.render('pages/index', {
    title: 'My배민',
    headerTitle: 'My배민',
    session,
  });
});

router.get('/sign-in', (req, res) => {
  const { session } = req;
  if (session) {
    res.redirect('/');
  }
  res.render('pages/sign-in', {
    title: '로그인',
    headerRightLink: 'close',
    headerRightHref: '/',
  });
});

module.exports = router;
