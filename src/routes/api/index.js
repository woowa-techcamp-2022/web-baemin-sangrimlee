const express = require('express');
const { signUp, signIn, checkEmail } = require('../../controllers/auth');

const router = express.Router();

router.post('/sign-up', signUp);

router.post('/sign-in', signIn);

router.get('/check-email', checkEmail);

module.exports = router;
