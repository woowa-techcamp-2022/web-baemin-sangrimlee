const express = require('express');
const apiRouter = require('./api');
const authRouter = require('./auth');

const router = express.Router();

router.get('/', (req, res) => {
  const { session } = req;
  res.render('pages/error');

  res.render('pages/index', {
    title: 'My배민',
    headerTitle: 'My배민',
    session,
  });
});

router.use('/api', apiRouter);
router.use('/auth', authRouter);

router.get('/*', (req, res) => {
  res.render('pages/404');
});

module.exports = router;
