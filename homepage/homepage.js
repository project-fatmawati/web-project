//Validasi Email untuk Newsletter lalu dikirim ke local storage//

function validateEmail (){
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)){
        alert("Berhasil, Tunggu Newsletter dari kami ya");
        localStorage.setItem("userEmail", email);
    } else {
        alert("Email Anda Salah, Silahkan Ulangi!");
    }
}

