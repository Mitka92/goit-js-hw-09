const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const emailInputElem = form.querySelector("input[name='email']");
const messageInputElem = form.querySelector("textarea[name = 'message']");
const storageKey = 'feedback-form-state';
const savedFormData = loadFromLS(storageKey);

if (savedFormData) {
  formData.email = savedFormData.email;
  formData.message = savedFormData.message;
}

emailInputElem.value = formData.email;
messageInputElem.value = formData.message;

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  saveToLS(storageKey, formData);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (emailInputElem.value && messageInputElem.value) {
    console.log(formData);
    localStorage.removeItem(storageKey);
    form.reset();
  } else {
    alert('Fill please all fields');
  }
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
