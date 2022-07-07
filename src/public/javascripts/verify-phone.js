function init() {
  const $phoneInput = document.querySelector('.form-input');
  $phoneInput.addEventListener('input', (event) => {
    const currentValue = event.target.value;
    const processed = currentValue
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/-{1,2}$/g, '');
    event.target.value = processed;
    $phoneInput.classList.toggle('is-valid', processed.length === 13);
  });
  $phoneInput.querySelector('.delete-btn').addEventListener('click', () => {
    $phoneInput.querySelector('input').value = '';
  });
}

init();
