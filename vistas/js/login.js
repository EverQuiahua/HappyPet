const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    location.href = "pagInicio.html";
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});