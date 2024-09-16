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

////// DOM HOME PAGE USER /////////

  /// Display Homepage///
    function displayHomepage() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const loginNav = document.getElementById('loginNavItem');
        const registerNav = document.getElementById('registerNavItem');
        const profileNav = document.getElementById('profileNavItem');
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
            } else {
                console.log('Pengguna tidak ditemukan.');
            }
        } else {
            // Menampilkan pesan default jika belum login
            welcomeMessage.textContent = 'Rajanya Barter Pakaian, Siap Tukaran.';
            console.log('Pengguna belum login.');
        }
    }
  
