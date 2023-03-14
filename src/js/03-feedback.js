import throttle from 'lodash.throttle'
import '../css/03-feedback.css';
import '../css/common.css';



const refs = {
form: document.querySelector('.feedback-form'),
textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
const STORAGE_KEY = 'feedback-form-state';
populateTextarea ();
const formData = {};

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value
    console.log(" formData:", formData)
})

function onFormSubmit(evt) {
evt.preventDefault();
evt.currentTarget.reset();

localStorage.removeItem(STORAGE_KEY)
};

function onTextareaInput(evt) {
const mesage = evt.target.value;
localStorage.setItem(STORAGE_KEY, mesage )
};

function populateTextarea () {
const savedMessage = localStorage.getItem(STORAGE_KEY);

if (savedMessage) {
   refs.textarea.value = savedMessage;
}
}