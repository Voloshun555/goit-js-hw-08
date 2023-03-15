import throttle from 'lodash.throttle'
import '../css/03-feedback.css';
import '../css/common.css';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('sumbit', onFormSubmit);
form.addEventListener('input', throttle(formData, 500));


function populateTextarea () {
const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedMessage) {
   email.value = savedMessage.email;
   message.value = savedMessage.message;
}
};
populateTextarea ();

function formData () {
dataForm = {
      email: email.value,
      message: message.value,
   };
   localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}


function onFormSubmit(evt) {
evt.preventDefault();
localStorage.removeItem(STORAGE_KEY);

const elementsAll = evt.currentTarget.elements;
const allForm = {
email: elementsAll.email.value,
password: elementsAll.message.value
}

evt.currentTarget.reset();
};

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





























































// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// form.addEventListener('input', throttle(onFormData, 500));
// form.addEventListener('submit', onSubmitForm);

// const formData = {};

// function onFormData(e) {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }

// function onSubmitForm(e) {
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }

// (function dataFromLocalStorage() {
//   const data = JSON.parse(localStorage.getItem('feedback-form-state'));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (data) {
//     email.value = data.email;
//     message.value = data.message;
//   }
// })();
