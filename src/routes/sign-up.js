const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/sign-up/agree');
});

router.get('/agree', (req, res) => {
  res.render('sign-up/agree', {
    title: '회원가입',
    headerTitle: '회원가입',
    agreeList: [
      {
        id: 'agree-1',
        label: '배달의민족 이용약관 동의',
        required: true,
      },
      {
        id: 'agree-2',
        label: '전자금융거래 이용약관 동의',
        required: true,
      },
      {
        id: 'agree-3',
        label: '개인정보 수집이용 동의',
        required: true,
      },
      {
        id: 'agree-4',
        label: '개인정보 제3자 제공 동의',
        required: false,
      },
      {
        id: 'agree-5',
        label: '마케팅 정보 메일, SMS 수신동의',
        required: false,
      },
    ],
  });
});

router.post('/agree', (req, res) => {
  res.redirect('/sign-up/verify-phone');
});

router.get('/verify-phone', (req, res) => {
  res.render('sign-up/verify-phone', {
    title: '회원가입',
    headerTitle: '회원가입',
  });
});

router.get('/additional-info', (req, res) => {
  res.render('sign-up/additional-info', {
    title: '회원가입',
    headerTitle: '회원가입',
  });
});

module.exports = router;
