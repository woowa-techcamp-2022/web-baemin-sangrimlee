const express = require('express');
const { createUser, isEmailExist } = require('../db/user');

const router = express.Router();

router.post('/sign-up', (req, res) => {
  const { email, nickname, password, birthday } = req.body;

  isEmailExist(email, (isEmailExistError, user) => {
    if (isEmailExistError) {
      res.status(500).json({
        ok: false,
        errorMessage: '알 수 없는 오류가 발생하였습니다.',
      });
    } else if (user) {
      res.status(400).json({
        ok: false,
        errorMessage: '이미 존재하는 이메일 계정입니다.',
      });
    } else {
      createUser(email, nickname, password, birthday, (createUserError) => {
        if (createUserError) {
          res.status(500).json({
            ok: false,
            errorMessage: '알 수 없는 오류가 발생하였습니다.',
          });
        } else {
          res.status(201).json({
            ok: true,
          });
        }
      });
    }
  });
});

module.exports = router;
