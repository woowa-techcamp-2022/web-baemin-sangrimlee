function init() {
  const $phoneInput = document.querySelector('.form-input');
  const $sendCodeBtn = document.querySelector('.send-code-btn');

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
}

init();
