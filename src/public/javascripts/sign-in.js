function validateFormInput(
  $element,
  errorMessage,
  validate = (value) => !!value,
) {
  const $formInput = $element.closest('.form-input');
  const $formInputError = $formInput.querySelector('.form-input-error');
  const isValid = validate($element.value);
  if (isValid) {
    $formInput.classList.remove('is-error');
    $formInputError.textContent = errorMessage;
  } else {
    $formInput.classList.add('is-error');
    $formInputError.textContent = errorMessage;
  }
  return isValid;
}

function init() {
  const $form = document.querySelector('.sign-in-form');

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    const $emailInput = event.target['email'];
    const $passwordInput = event.target['password'];
    const isEmailInputValid = validateFormInput(
      $emailInput,
      '아이디 또는 이메일은 필수 입력값입니다.',
    );
    const isPasswordInputValid = validateFormInput(
      $passwordInput,
      '비밀번호는 필수 입력값입니다.',
    );

    if (!isEmailInputValid || !isPasswordInputValid) {
      return;
    }
  });
}

init();
