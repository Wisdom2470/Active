document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
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

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = passwordInput.value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            clearInputs();
            return;
        }


        if (localStorage.getItem(email)) {
            alert('Email is already registered. Please login.');
            clearInputs();
            return;
        }

        
        const userData = { username, password };
        localStorage.setItem(email, JSON.stringify(userData));
        alert('Signup successful! Please login.');

        clearInputs();

        
        window.location.href = 'login.html';
    });

    function clearInputs() {
        signupForm.reset();
    }
});
