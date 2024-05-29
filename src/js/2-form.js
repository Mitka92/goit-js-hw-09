const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('form');
const emailInputElem = form.querySelector('input');
const messageInputElem = form.querySelector('textarea');
const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
  formData.email = JSON.parse(savedFormData).email;
  formData.message = JSON.parse(savedFormData).message;
}
form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
emailInputElem.value = formData.email;
messageInputElem.value = formData.message;

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!emailInputElem.value || !messageInputElem.value) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.clear();
    form.reset();
  }
});
