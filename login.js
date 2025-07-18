document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = 'Show';
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = passwordInput.value;

        
        const storedData = localStorage.getItem(email);
        if (!storedData) {
            alert('Email not registered. Please signup first.');
            clearInputs();
            return;
        }

        const userData = JSON.parse(storedData);

        
        if (userData.username !== username) {
            alert('Username does not match the registered email.');
            clearInputs();
            return;
        }

        
        if (userData.password !== password) {
            alert('Incorrect password.');
            clearInputs();
            return;
        }

        clearInputs();

        
        window.location.href = 'landing.html';
    });

    function clearInputs() {
        loginForm.reset();
    }
});
