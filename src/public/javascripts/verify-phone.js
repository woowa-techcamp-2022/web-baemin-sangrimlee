function createVerifyCode() {
  return Math.random().toString(10).substring(2, 6);
}

function sendVerifyCode($inputElement) {
  setTimeout(() => {
    $inputElement.value = createVerifyCode();
  }, 2000);
}

function init() {
  const $verifyPhoneForm = document.querySelector('form.verify-phone-form');
  const $phoneInput = document.querySelector('.form-input');
  const $sendCodeBtn = document.querySelector('.send-code-btn');
  const $verifyCodeForm = document.querySelector('form.verify-code-form');
  const $verifyCodeInput = $verifyCodeForm.querySelector('input');
  const $resendCodeBtn = document.querySelector('.resend-code-btn');

  $phoneInput.addEventListener('input', (event) => {
    const currentValue = event.target.value;
    const processed = currentValue
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/-{1,2}$/g, '');
    event.target.value = processed;
    const isValid = processed.length === 13;
    $phoneInput.classList.toggle('is-valid', isValid);
    $sendCodeBtn.disabled = !isValid;
  });

  $phoneInput.querySelector('.delete-btn').addEventListener('click', () => {
    $phoneInput.querySelector('input').value = '';
  });

  $verifyPhoneForm.addEventListener('submit', (event) => {
    event.preventDefault();
    $sendCodeBtn.remove();
    $verifyCodeForm.classList.remove('hidden');
    sendVerifyCode($verifyCodeInput);
    alert('인증번호가 발송되었습니다.');
    $phoneInput.querySelector('input').disabled = true;
  });

  $resendCodeBtn.addEventListener('click', () => {
    sendVerifyCode($verifyCodeInput);
    alert('인증번호가 발송되었습니다.');
  });
}

init();
