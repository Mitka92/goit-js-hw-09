import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},a=document.querySelector(".feedback-form"),m=a.querySelector("input[name='email']"),n=a.querySelector("textarea[name = 'message']"),r="feedback-form-state",s=i(r);s&&(t.email=s.email,t.message=s.message);m.value=t.email;n.value=t.message;a.addEventListener("input",e=>{t[e.target.name]=e.target.value.trim(),c(r,t)});a.addEventListener("submit",e=>{e.preventDefault(),m.value&&n.value?(console.log(t),localStorage.removeItem(r),a.reset()):alert("Fill please all fields")});function c(e,o){const l=JSON.stringify(o);localStorage.setItem(e,l)}function i(e){const o=localStorage.getItem(e);try{return JSON.parse(o)}catch{return o}}
//# sourceMappingURL=commonHelpers2.js.map
