document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const showSignup = document.getElementById('showSignup');
  const showLogin = document.getElementById('showLogin');

  // Tampilkan form login sebagai default
  loginForm.style.display = 'block';

  // Saat tombol "Daftar Sekarang" diklik, tampilkan form pendaftaran
  showSignup.addEventListener('click', function (e) {
      e.preventDefault();
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
  });

  // Saat tombol "Masuk Sekarang" diklik, tampilkan form login
  showLogin.addEventListener('click', function (e) {
      e.preventDefault();
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
  });
});

