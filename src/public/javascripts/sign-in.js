function init() {
  const $form = document.querySelector('.sign-in-form');

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    const $emailFormInput = event.target['email'].closest('div');
    const $passwordFormInput = event.target['password'].closest('div');

    const signInData = {
      email: event.target['email'].value,
      password: event.target['password'].value,
    };
    if (!signInData.email) {
      $emailFormInput.classList.add('is-error');
      const $errorMessage = $emailFormInput.querySelector('.form-input-error');
      $errorMessage.textContent = '아이디 또는 이메일은 필수 입력값입니다.';
    }
    if (!signInData.password) {
      $passwordFormInput.classList.add('is-error');
      const $errorMessage =
        $passwordFormInput.querySelector('.form-input-error');
      $errorMessage.textContent = '비밀번호는 필수 입력값입니다.';
    }
  });
}

init();
