const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('form');
const input = form.querySelector('input');
const textArea = form.querySelector('textarea');
if (localStorage.getItem('feedback-form-state')) {
  formData.email = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  formData.message = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}
form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
input.value = formData.email;
textArea.value = formData.message;

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!input.value || !textArea.value) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.clear();
    form.reset();
  }
});
