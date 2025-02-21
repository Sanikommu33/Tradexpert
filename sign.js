// script.js

// Select the form and input elements
const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add an event listener to handle form submission
signupForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Retrieve input values
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Basic validation
  if (username === '' || email === '' || password === '') {
    alert('Please fill in all the fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  // Example of client-side logic (e.g., saving data or sending to the backend)
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);

  // Success message or further processing
  alert('Sign Up Successful!');

  // Optionally clear the form
  signupForm.reset();
});

// Helper function to validate email format
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
