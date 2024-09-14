// Function to handle login form submission
document.getElementById('loginFormElement').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting and reloading the page

  // Get the email and password values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked; // Check if "Remember Me" is selected

  // Simple validation to check if both fields are filled
  if (email && password) {
      // Create an object to store email and password
      const userData = {
          email: email,
          password: password,  // Not recommended to store password in localStorage for security reasons
          remember: rememberMe
      };

      // Store the object as a JSON string in localStorage
      localStorage.setItem('user', JSON.stringify(userData));

      // Notify user of successful login and data storage
      alert('Login successful! Data saved in localStorage.');

      // Optionally, you can clear the form fields after submission
      document.getElementById('loginFormElement').reset();
  } else {
      alert('Please enter both email and password.');
  }
});

// Optional: Check if the user data is already stored in localStorage when the page loads
window.onload = function() {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && storedUser.email) {
      if (storedUser.remember) {
          alert(`Welcome back, ${storedUser.email}!`);
      } else {
          // Clear password for security reasons if "remember me" is not checked
          localStorage.removeItem('user');
      }
  }
};
