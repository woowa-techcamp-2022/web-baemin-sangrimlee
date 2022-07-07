import { handleFormInputEvent, disableFormInput } from './form-input.js';
import { preprocessBirthday } from './utils/preprocess.js';
import {
  validateDateString,
  validateEmail,
  validateNickname,
  validatePassword,
} from './utils/validate.js';

function init() {
  const $form = document.querySelector('form.additional-info-form');
  const $additionalInputWrapper = $form.querySelector('.additional-input-wrap');
  const $emailInput = $form.querySelector('.email-input');
  const $nicknameInput = $form.querySelector('.nickname-input');
  const $passwordInput = $form.querySelector('.password-input');
  const $birthdayInput = $form.querySelector('.birthday-input');
  const $checkEmailDuplicateButton = $form.querySelector(
    '.check-duplicate-btn',
  );

  handleFormInputEvent($emailInput, {
    validate: validateEmail,
    errorMessage: '올바른 이메일 형식이 아닙니다.',
    onValidate: (isValid) => {
      $checkEmailDuplicateButton.disabled = !isValid;
    },
  });

  handleFormInputEvent($nicknameInput, {
    validate: validateNickname,
    errorMessage: '2자 이상, 16자 이하 영문, 한글, 숫자만 포함해야합니다.',
  });

  handleFormInputEvent($passwordInput, {
    validate: validatePassword,
    errorMessage:
      '10자 이상 영어 대문자, 소문자, 숫자, 특수문자 중 2종류를 조합해야합니다.',
  });

  handleFormInputEvent($birthdayInput, {
    preprocess: preprocessBirthday,
    validate: validateDateString,
    errorMessage: '올바른 날짜 형식이 아닙니다.',
  });

  $checkEmailDuplicateButton.addEventListener('click', (event) => {
    $additionalInputWrapper.classList.remove('hidden');
    disableFormInput($emailInput);
    event.target.disabled = true;
  });

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

init();
