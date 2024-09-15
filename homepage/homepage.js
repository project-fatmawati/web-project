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




// const users = {
//     name : "yana",
//     age : 28,
//     email : "yanaudin@gmail.com",
// };

// localStorage.setItem('users', JSON.stringify(users));
// console.log(localStorage.getItem('users')); 
// // //hasilnya pasti dalam bentuk objek

//kita coba ambil data dan kembalikan dalam bentuk string
// let users = JSON.parse(localStorage.getItem('users'));
// console.log(users.name);



// //Opsi 1 BERHASIL
// localStorage.setItem('users', JSON.stringify({
//     name : "yana",
//     age : 28,
//     email : "yanaudin@gmail.com",
// }));


// function displayUserName() {
//     const storedUser = JSON.parse(localStorage.getItem('users'));
  
//     if (storedUser) {
//       const greetingUser = document.getElementById('hero-user');
//       greetingUser.textContent = `Halo, selamat datang ${storedUser.name}!`;
        
//       //btn login berubah teksnya jadi profil
//     const loginNav = document.getElementById('loginNav');
//     loginNav.innerText = "Profil";
//     loginNav.style.color= "yellow";

//     //btn login berubah teksnya jadi register
//     const registerNav = document.getElementById("register-navbar");
//     registerNav.InnerText= "Logout"
//     registerNav.style.color = "red";

//     //Navbar about dihilangkan
//     const aboutNav = document.getElementById ("about-navbar");
//     aboutNav.remove();

//     //Navbar member dihilangkan
//     const memberNav = document.getElementById ("member-navbar");
//     memberNav.remove();
  

//     } else {
//       // Jika belum login, arahkan ke halaman login atau tampilkan pesan lain
//       console.log('Pengguna belum login');
//     }
//   }
  
//   // Panggil fungsi saat halaman dimuat
//   window.onload = displayUserName;


  localStorage.setItem('users', JSON.stringify({

    name : "yana",
    age : 28,
    email : "yanaudin@gmail.com",
}));

function displayHomepage() {
    const storedUserData = localStorage.getItem('users'); 
  
    const greetingUser = document.getElementById('hero-user');
    const loginNav = document.getElementById('login-navbar').textContent= 'Profil';
    const registerNav = document.getElementById('register-navbar').textContent = 'Logout'
    const aboutNav = document.getElementById ('about-navbar');
    const memberNav = document.getElementById ('member-navbar');
  
      if (storedUserData) {
        const user = JSON.parse(storedUserData); // Parse user data
        
        //Greeting User
        greetingUser.textContent = `Halo, selamat datang ${user.name}!`;

       // Change Button Login (using CSS class)
       loginNav.classList.add('logged-in'); // Add a CSS class for styling

       // Change Button Register (using CSS class)
       registerNav.classList.add('logged-in'); // Add a CSS class for styling
 
       // Hide About and Member Menus (using CSS class)
       aboutNav.classList.add('hidden');
       memberNav.classList.add('hidden');

      } else {
        console.log ('Pengguna belum login')

      }
  }

  // Call the function on page load
  window.onload = displayHomepage;





  // Fungsi untuk logout
  function logout() {
    // Tambahkan logika logout 

    loginNav.textContent = "Login";
    registerNav.textContent = "Register";

    // Hapus kelas CSS yang ditambahkan saat login
    loginNav.classList.remove('logged-in');
    registerNav.classList.remove('logged-in');

    // Tampilkan kembali menu yang disembunyikan
    aboutNav.classList.remove('hidden');
    memberNav.classList.remove('hidden');

    // Kembalikan teks sambutan ke default
    greetingUser.textContent = "Rajanya Barter Pakaian, <br> Siap Tukaran."
    
  
    // Panggil kembali fungsi displayHomepage untuk memperbarui tampilan
    displayHomepage();

      // Mendapatkan elemen tombol berdasarkan ID
  const logoutButton = document.getElementById('register-navbar');

    // Tambahkan event listener pada tombol logout
    logoutButton.addEventListener('click', logout);

    LocalStorage.removeItem('users');
    window.location.href = 'about.html';
  }



//   // Mendapatkan elemen tombol berdasarkan ID
//   const logoutButton = document.getElementById('register-navbar');

//   // Menambahkan event listener ke tombol logout
//   logoutButton.addEventListener('click', logout);

  // Fungsi untuk menampilkan tombol logout setelah login
//   function showLogoutButton() {
//     logoutButton.style.display = 'inline-block';
//     // Sembunyikan tombol login dan register (jika perlu)
//     // ...
//   }

//   // Contoh: Memanggil fungsi showLogoutButton() setelah login berhasil
//   // (Ganti dengan logika login Anda)
//   if (LOcalStorage.getItem('user')) {
//     showLogoutButton();
//   }


