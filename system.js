// Toggle to register form
document.getElementById('toggle-register').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    // Clear any existing form fields
    document.querySelectorAll('#login-form input').forEach(input => input.value = '');
    console.log('Switched to registration form');
});

// Toggle to login form
document.getElementById('toggle-login').addEventListener('click', () => {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    // Clear any existing form fields
    document.querySelectorAll('#register-form input').forEach(input => input.value = '');
    console.log('Switched to login form');
});

// Login form validation
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#login-form input[type="email"]').value;
    const password = document.querySelector('#login-form input[type="password"]').value;

    if (!email || !password) {
        alert('Please fill all fields!');
    } else {
        alert('Login successful! (This is just a demo - no real backend)');
    }
});

// Register form validation
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#register-form input[type="text"]').value;
    const email = document.querySelector('#register-form input[type="email"]').value;
    const pass = document.querySelector('#register-form input[type="password"]:nth-child(3)').value;
    const confirm = document.querySelector('#register-form input[type="password"]:nth-child(4)').value;
    
    if (!name || !email || !pass || !confirm) {
        alert('Please fill all fields!');
    } else if (pass !== confirm) {
        alert('Passwords do not match!');
    } else {
        alert('Registration successful! (This is just a demo - no real backend)');
    }
});