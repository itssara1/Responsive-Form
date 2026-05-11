
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const toggleLoginBtn = document.querySelector('.toggle-login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
   container.classList.remove('active');

});


toggleLoginBtn.addEventListener('click', () => {
   container.classList.remove('active');
});
