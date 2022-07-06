const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'My배민' });
});

module.exports = router;
