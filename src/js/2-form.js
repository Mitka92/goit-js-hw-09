const form = document.querySelector('form');
const input = form.querySelector('input');
const textArea = form.querySelector('textarea');
const formData = {
  email: '',
  message: '',
};

input.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
textArea.value = JSON.parse(
  localStorage.getItem('feedback-form-state')
).message;

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
form.addEventListener('submit', e => {
  e.preventDefault();
});
