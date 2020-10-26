function formValidate() {

    var username = document.getElementById('uname');
    var password = document.getElementById('passwd');

    var uname_error = document.getElementById('uname-error-box');
    var passwd_error = document.getElementById('passwd-error-box');

    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$%&^@!])[a-zA-Z0-9#$%^&@!]{2,}$/;

    username.addEventListener('click', () => {
        username.style.border = "2px solid rgba(255, 255, 0, 0.5)";
    });

    if (username.value.trim() == '') {

        alert("Please enter the Username");
        return false;

    }


    if (username.value.trim().length < 3) {
        username.style.border="2px solid red";
        uname_error.style.display="block";
        uname_error.innerHTML = '-Please enter a valid username';
        uname_error.style.color = "red";
        return false;
    }

    uname_error.style.display="none";

    if (password.value == '') {
        alert("Please enter the Password");
        return false;
    }

    if (pattern.test(password.value)==false) {
        password.style.border = "2px solid red";
        passwd_error.style.display = "block";
        passwd_error.style.color = "red";
        passwd_error.innerHTML = "Please enter a valid password !";
        return false;
    }

    passwd_error.style.display="none";
    
    return true;
}