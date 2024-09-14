document.addEventListener('DOMContentLoaded', function() {
  const loginDiv = document.getElementById('loginDiv');
  const signupDiv = document.getElementById('signupDiv');
  const showSignupLink = document.getElementById('showSignup');
  const showLoginLink = document.getElementById('showLogin');

  // Fungsi untuk menampilkan form pendaftaran
  showSignupLink.addEventListener('click', function(e) {
      e.preventDefault();
      loginDiv.style.display = 'none';
      signupDiv.style.display = 'block';
  });

  // Fungsi untuk menampilkan form login
  showLoginLink.addEventListener('click', function(e) {
      e.preventDefault();
      signupDiv.style.display = 'none';
      loginDiv.style.display = 'block';
  });

  // Fungsi untuk reset input form
  function resetForm(form) {
      form.reset(); // Reset semua input field dalam form
  }

  // Fungsi untuk validasi form
  function validateForm(form) {
      const inputs = form.querySelectorAll('input[required]');
      for (let input of inputs) {
          if (!input.value.trim()) {
              alert(`Kolom ${input.previousElementSibling.textContent} harus diisi!`);
              input.focus();
              return false;
          }
      }
      return true;
  }

  // Fungsi untuk pendaftaran
  document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();

      if (!validateForm(this)) {
          return;
      }

      const newUser = {
          firstName: document.getElementById('first-name').value,
          lastName: document.getElementById('last-name').value,
          email: document.getElementById('email-signup').value,
          phone: document.getElementById('phone').value,
          address: document.getElementById('address').value,
          password: document.getElementById('password-signup').value
      };

      // Validasi password dan konfirmasi password
      if (newUser.password !== document.getElementById('confirm-password').value) {
          alert('Password dan konfirmasi password tidak cocok!');
          return;
      }

      // Ambil data pengguna dari localStorage
      let users = JSON.parse(localStorage.getItem('users')) || {};

      // Cek apakah email atau nomor HP sudah digunakan
      const isEmailTaken = Object.values(users).some(user => user.email === newUser.email);
      const isPhoneTaken = Object.values(users).some(user => user.phone === newUser.phone);

      if (isEmailTaken) {
          alert('Email sudah terdaftar! Silakan login.');
          return;
      } else if (isPhoneTaken) {
          alert('Nomor HP sudah terdaftar! Silakan login.');
          return;
      }

      // Simpan pengguna baru ke localStorage
      users[newUser.email] = newUser;
      localStorage.setItem('users', JSON.stringify(users));

      // Reset form pendaftaran
      resetForm(document.getElementById('signupForm'));

      alert('Pendaftaran berhasil! Silakan login.');
      signupDiv.style.display = 'none';
      loginDiv.style.display = 'block';
  });

  // Fungsi untuk login
  document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();

      if (!validateForm(this)) {
          return;
      }

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Ambil data pengguna dari localStorage
      let users = JSON.parse(localStorage.getItem('users')) || {};

      // Validasi email dan password
      if (users[email] && users[email].password === password) {
          alert('Login berhasil!');
          localStorage.setItem('loggedInUser', email);

          // Reset form login
          resetForm(document.getElementById('loginForm'));
      } else {
          alert('Email atau password salah!');
      }
  });
});
