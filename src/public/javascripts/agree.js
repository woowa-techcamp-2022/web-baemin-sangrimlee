const $form = document.querySelector('form.form-agree');
const $submitBtn = document.querySelector('button[type="submit"]');

$form.addEventListener('click', (event) => {
  const currentTarget = event.target;
  const $agreeAllCheckbox = $form.querySelector('#agree-all');
  const $checkboxList = [
    ...$form.querySelectorAll('.form-checkbox > input:not(#agree-all)'),
  ];
  const $requiredCheckboxList = $checkboxList.filter(
    (element) => element.required,
  );

  if (
    currentTarget &&
    [$agreeAllCheckbox, ...$checkboxList].includes(currentTarget)
  ) {
    if (currentTarget.id === 'agree-all') {
      $checkboxList.forEach(($checkbox) => {
        $checkbox.checked = currentTarget.checked;
      });
    }
    if (currentTarget.required || currentTarget.id === 'agree-all') {
      $submitBtn.disabled = !$requiredCheckboxList.every(
        (element) => element.checked,
      );
    }
    $agreeAllCheckbox.checked = $checkboxList.every(
      (element) => element.checked,
    );
  }
});

$form.addEventListener('submit', (event) => {
  event.preventDefault();
});
