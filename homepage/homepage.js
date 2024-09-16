//Validasi Email untuk Newsletter/

function validateEmail (){

    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validasi email. Jika user isi Email yang benar maka berhasil jika bukan email maka Ulangi.
    if(emailRegex.test(email)){
        alert("Berhasil, Tunggu Newsletter dari kami ya");
    } else {
        alert("Email Anda Salah, Silahkan Ulangi!");
    }
}

////// DOM HOMEPAGE USER /////////

  /// Display Homepage///
  document.addEventListener('DOMContentLoaded', function() {
    function displayHomepage() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const loginNav = document.getElementById('loginNavItem');
        const registerNav = document.getElementById('registerNavItem');
        const profileNav = document.getElementById('profileNavItem');
        const aboutNav = document.getElementById ('aboutNavItem')
        const profileDropdown = document.getElementById('profileDropdown');
        const userNameSpan = document.getElementById('userName');
        const userPhoto = document.getElementById('userPhoto');
        const welcomeMessage = document.getElementById('hero-user');
        
  
        if (loggedInUser) {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = users[loggedInUser];
  
            if (user) {
                // Ganti teks selamat datang dan tampilkan nama user
                welcomeMessage.textContent = `Halo, selamat datang ${user.firstName}!`;
                userNameSpan.textContent = user.firstName;
                userPhoto.src = user.photo || "Asset homepage/photo_cat.png";
  
                // Menampilkan tombol profil dan menyembunyikan login/register
                profileNav.style.display = 'block';
                loginNav.style.display = 'none';
                registerNav.style.display = 'none';
                aboutNav.style.display= 'none'
            } else {
                console.log('Pengguna tidak ditemukan.');
            }
        } else {
            // Menampilkan pesan default jika belum login
            welcomeMessage.textContent = 'Rajanya Barter Pakaian, Siap Tukaran.';
            console.log('Pengguna belum login.');
        }


    }
  

    function logout() {
        // Hapus data login
        localStorage.removeItem('loggedInUser');
        
        // Tampilkan kembali login/register dan sembunyikan profil
        document.getElementById('loginNavItem').style.display = 'block';
        document.getElementById('registerNavItem').style.display = 'block';
        document.getElementById('profileNavItem').style.display = 'none';
        document.getElementById ('aboutNavItem').style.display ='block'
  
        // Ubah kembali pesan selamat datang
        document.getElementById('hero-user').textContent = 'Rajanya Barter Pakaian, Siap Tukaran.';
  
        // Redirect ke halaman login (opsional)
        window.location.href = 'login.html';
    }
  
    // Jalankan saat halaman dimuat
    displayHomepage();
  
    // Event listener untuk tombol logout
    document.getElementById('logout').addEventListener('click', logout);
  
    // Event listener untuk tombol profil
    document.getElementById('profileButton').addEventListener('click', function() {
        const dropdown = document.getElementById('profileDropdown');
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';

    });
  
    // Tutup dropdown jika klik di luar
    document.addEventListener('click', function(event) {
        const profileButton = document.getElementById('profileButton');
        const dropdown = document.getElementById('profileDropdown');
  
        if (!profileButton.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
  });
  
  