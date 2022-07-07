const express = require('express');
const { createUser, isUserExist } = require('../db/user');

const router = express.Router();

router.post('/sign-up', (req, res) => {
  const { email, nickname, password, birthday } = req.body;

  isUserExist(email, (isExist) => {
    if (isExist) {
      res.status(400).json({
        ok: false,
        errorMessage: '이미 존재하는 이메일 계정입니다.',
      });
    } else {
      createUser(email, nickname, password, birthday, (ok) => {
        res.json({
          ok,
        });
      });
    }
  });
});

module.exports = router;
