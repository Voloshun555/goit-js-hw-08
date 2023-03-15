import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state'

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onFormData, 500));

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};
populateTextarea();






// ================================================================================
// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('.feedback-form input');
// const message = document.querySelector('.feedback-form textarea');
// const STORAGE_KEY = 'feedback-form-state';

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(formData, 500));


// function formData () {
// dataForm = {
//       email: email.value,
//       message: message.value,
//    };
//    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
// }


// function onFormSubmit(evt) {
// evt.preventDefault();
// localStorage.removeItem(STORAGE_KEY);

// const elementsAll = evt.currentTarget.elements;
// const allForm = {
// email: elementsAll.email.value,
// message: elementsAll.message.value
// }

// evt.currentTarget.reset();
// };


// function populateTextarea () {
//    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//    if (savedMessage) {
//       email.value = savedMessage.email;
//       message.value = savedMessage.message;
//    }
//    };
//    populateTextarea ();
// =================================================================================
// const refs = {
// form: document.querySelector('.feedback-form'),
// textarea: document.querySelector('.feedback-form'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// const STORAGE_KEY = 'feedback-form-state';
// populateTextarea ();

// function onFormSubmit(evt) {
// evt.preventDefault();
// evt.currentTarget.reset();
// localStorage.removeItem(STORAGE_KEY)
// };

// function onTextareaInput(evt) {
// const mesage = evt.target.value;
// console.log("mesage:", mesage)
// localStorage.setItem(STORAGE_KEY, mesage)
// };

// function populateTextarea () {
// const savedMessage = localStorage.getItem(STORAGE_KEY);
// if (savedMessage) {
//    refs.textarea.value = savedMessage;
// }
// }
// ======================================================================
// const formData = {};
// refs.form.addEventListener('input', e => {
//    formData[e.target.name] = e.target.value
//    console.log(" formData:", formData)
// })












// ============================================














































