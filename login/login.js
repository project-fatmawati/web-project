// Menunggu seluruh halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  // Mengambil elemen-elemen penting
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const showSignupLink = document.getElementById('showSignup');
  const showLoginLink = document.getElementById('showLogin');

  // Fungsi untuk menampilkan form pendaftaran
  showSignupLink.addEventListener('click', function(e) {
      e.preventDefault();
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
  });

  // Fungsi untuk menampilkan form login
  showLoginLink.addEventListener('click', function(e) {
      e.preventDefault();
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
  });

  // Fungsi untuk pendaftaran
  signupForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email-signup').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      const password = document.getElementById('password-signup').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      // Validasi sederhana
      if (password !== confirmPassword) {
          alert('Password dan konfirmasi password tidak cocok!');
          return;
      }

      // Membuat objek user
      const user = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          address: address,
          password: password
      };

      // Menyimpan user ke localStorage
      localStorage.setItem(email, JSON.stringify(user));

      alert('Pendaftaran berhasil! Silakan login.');

      // Reset form setelah submit
      signupForm.reset();

      // Kembali ke form login
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
  });

  // Fungsi untuk login
  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('rememberMe').checked;

      // Ambil data user dari localStorage berdasarkan email
      const storedUser = localStorage.getItem(email);
      
      // Cek apakah data user ada dan validasi password
      if (storedUser) {
          const user = JSON.parse(storedUser);
          if (user.password === password) {
              alert('Login berhasil!');

              // Jika checkbox "Ingat Saya" dicentang, simpan informasi login
              if (rememberMe) {
                  localStorage.setItem('loggedInUser', email);
              }

              // Reset form login
              loginForm.reset();
          } else {
              alert('Password salah!');
          }
      } else {
          alert('Email tidak ditemukan! Silakan daftar terlebih dahulu.');
      }
  });
});
