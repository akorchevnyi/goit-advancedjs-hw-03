import { refs, STORAGE_KEY } from '../constants/constants.js';

const formData = { email: '', message: '' };

fillFormFields(refs.form);

refs.form.addEventListener('input', handleFormInput);
refs.form.addEventListener('submit', handleFormSubmit);


/**
 * Handles the form input event, updating the form data and storing it in local storage.
 *
 * @param {Event} e - The input event object.
 * @return {void}
 */
function handleFormInput(e) {
  refs.alert.style.display = 'none';

  const inputValue = e.target.value.trim();
  const inputName = e.target.name;

  formData[inputName] = inputValue;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


/**
 * Handles the form submission event.
 *
 * @param {Event} e - The form submission event.
 * @return {void} Returns nothing.
 */
function handleFormSubmit(e) {
  e.preventDefault();
  if (!formData.message || !formData.email) {
    refs.alert.style.display = 'block';
    return;
  }
  console.log(formData);
  formData.message = '';
  formData.email = '';
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
}


/**
 * Fills the form fields with saved data from local storage.
 *
 * @param {HTMLFormElement} form - The form element whose fields need to be populated.
 * @return {void}
 */
function fillFormFields(form) {
  const localStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!localStorageData) return;

  for (const key in localStorageData) {
    formData[key] = localStorageData[key];
    form.elements[key].value = localStorageData[key];
  }
}