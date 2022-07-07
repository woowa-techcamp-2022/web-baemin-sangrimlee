function init() {
  const $form = document.querySelector('form.additional-info-form');
  const $additionalInfoWrapper = document.querySelector(
    '.additional-info-wrap',
  );
  const $checkEmailDuplicateButton = document.querySelector(
    '.check-duplicate-btn',
  );

  $checkEmailDuplicateButton.addEventListener('click', () => {
    $additionalInfoWrapper.classList.remove('hidden');
  });

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

init();
