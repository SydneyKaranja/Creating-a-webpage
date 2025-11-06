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

// Create message display function
function showMessage(formId, message, isError = false) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.padding = '10px';
    messageDiv.style.marginTop = '10px';
    messageDiv.style.borderRadius = '4px';
    messageDiv.style.backgroundColor = isError ? '#ffebee' : '#e8f5e9';
    messageDiv.style.color = isError ? '#c62828' : '#2e7d32';
    
    // Remove any existing message
    const existingMessage = document.querySelector(`#${formId} .message`);
    if (existingMessage) existingMessage.remove();
    
    messageDiv.className = 'message';
    document.getElementById(formId).appendChild(messageDiv);
    
    // Auto-remove message after 5 seconds
    setTimeout(() => messageDiv.remove(), 5000);
}

// Login form validation
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#login-form input[type="email"]').value;
    const password = document.querySelector('#login-form input[type="password"]').value;

    if (!email || !password) {
        showMessage('login-form', 'Please fill all fields!', true);
    } else {
        showMessage('login-form', 'Login successful! (This is just a demo - no real backend)');
        e.target.reset(); // Clear the form
    }
});

// Register form validation
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#register-form input[type="text"]').value;
    const email = document.querySelector('#register-form input[type="email"]').value;
    const pass = document.querySelector('#register-form input[name="password"]').value;
    const confirm = document.querySelector('#register-form input[name="confirm-password"]').value;
    
    if (!name || !email || !pass || !confirm) {
        showMessage('register-form', 'Please fill all fields!', true);
    } else if (pass !== confirm) {
        showMessage('register-form', 'Passwords do not match!', true);
    } else {
        showMessage('register-form', 'Registration successful! (This is just a demo - no real backend)');
        e.target.reset(); // Clear the form
    }
});
