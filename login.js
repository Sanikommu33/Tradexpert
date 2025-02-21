// script.js

// Select the form and input elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Add an event listener to handle form submission
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Retrieve input values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Basic validation
  if (username === '' || password === '') {
    alert('Please fill in both username and password.');
    return;
  }

  // Example of client-side logic (e.g., authentication logic would go here)
  console.log('Username:', username);
  console.log('Password:', password);

  // You can replace this logic with an AJAX request or redirection
  alert('Login Successful!');
});
