export function handleFormInputEvent($element, options) {
  const { preprocess, validate, onValidate, errorMessage } = {
    preprocess: (value) => value,
    validate: (value) => !!value,
    onValidate: (isValid) => isValid,
    errorMessage: '',
    ...options,
  };

  const $inputElement = $element.querySelector('input');
  const $deleteBtn = $element.querySelector('.delete-btn');
  const $errorMessage = $element.querySelector('.form-input-error');

  const onChangeValue = (value) => {
    const processedValue = preprocess(value);
    $inputElement.value = processedValue;
    const isValid = validate(value);
    $element.classList.toggle('is-valid', isValid);
    $element.classList.toggle('is-error', !isValid);
    $errorMessage.textContent = isValid ? '' : errorMessage;
    onValidate(isValid);
  };

  $inputElement.addEventListener('input', (event) => {
    onChangeValue(event.target.value);
  });

  if ($deleteBtn) {
    $deleteBtn.addEventListener('click', () => {
      $inputElement.value = '';
      onChangeValue('');
    });
  }
}

export function disableFormInput($element) {
  const $inputElement = $element.querySelector('input');
  const $deleteBtn = $element.querySelector('.delete-btn');
  $inputElement.disabled = true;
  if ($deleteBtn) {
    $deleteBtn.disabled = true;
  }
}
