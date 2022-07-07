import { EMAIL_REGEX } from './constants/regex.js';
import { handleFormInputEvent, disableFormInput } from './form-input.js';

function init() {
  const $form = document.querySelector('form.additional-info-form');
  const $emailInput = $form.querySelector('.email-input');
  const $additionalInfoWrapper = document.querySelector(
    '.additional-info-wrap',
  );
  const $checkEmailDuplicateButton = document.querySelector(
    '.check-duplicate-btn',
  );

  handleFormInputEvent($emailInput, {
    validate: (value) => EMAIL_REGEX.test(value),
    errorMessage: '올바른 이메일 형식이 아닙니다.',
    onValidate: (isValid) => {
      $checkEmailDuplicateButton.disabled = !isValid;
    },
  });

  $checkEmailDuplicateButton.addEventListener('click', (event) => {
    $additionalInfoWrapper.classList.remove('hidden');
    disableFormInput($emailInput);
    event.target.disabled = true;
  });

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

init();
