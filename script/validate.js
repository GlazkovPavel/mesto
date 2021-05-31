const removeValidationErrors = (popup) => {
  const formList = Array.from(popup.querySelectorAll('.popup__input-error'));
  const itemList = Array.from(popup.querySelectorAll('.popup__item'))
  formList.forEach((spanElement) => {
    spanElement.textContent = ' ';
  });
  itemList.forEach((itemElement) => {
    itemElement.classList.remove('popup__item_type_error')
  })
};





