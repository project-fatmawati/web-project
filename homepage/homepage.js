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


