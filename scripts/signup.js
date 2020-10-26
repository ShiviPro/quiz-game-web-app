function formValidate() {

    var first_name = document.getElementById('fname');
    var last_name = document.getElementById('lname');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone')
    var username = document.getElementById('uname');
    var password = document.getElementById('passwd');
    var conf_passwd = document.getElementById('conf-passwd');

    var email_error = document.getElementById('email-error-box');
    var phone_error = document.getElementById('phone-error-box');
    var uname_error = document.getElementById('uname-error-box');
    var passwd_error = document.getElementById('passwd-error-box');
    var conf_passwd_error = document.getElementById('conf-passwd-error-box');

    var email_pattern = /^[a-zA-Z0-9._]{1,}@[a-z]{2,}.[a-z]{2,3}[.]{0,}[a-z]{0,3}$/;
    var phone_pattern = /^[789]{1}[0-9]{9}$/;
    var passwd_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$%&^@!])[a-zA-Z0-9#$%^&@!]{2,}$/;


    if (first_name.value.trim() == '') {

        alert("Please enter your First Name");
        return false;

    }

    if (last_name.value.trim() == '') {

        alert("Please enter your Last Name");
        return false;

    }

    if (email.value.trim() == '') {

        alert("Please enter your email");
        return false;

    }

    if (email_pattern.test(email.value) == false) {

        email.style.border = "2px solid red";
        email_error.style.display = 'block';
        email_error.innerHTML = "-Please enter a valid email";
        return false;

    }

    email_error.style.display = "none";
    email.style.border = "2px solid rgba(0, 0, 0, 0.5)";


    if (phone.value.trim() == '') {

        alert("Please enter your phone no.");
        return false;

    }

    if (phone_pattern.test(phone.value) == false) {

        phone.style.border = "2px solid red";
        phone_error.style.display = 'block';
        phone_error.innerHTML = "-Please enter a valid phone no.";
        return false;

    }

    phone_error.style.display = "none";
    phone.style.border = "2px solid rgba(0, 0, 0, 0.5)";

    if (username.value.trim().length < 3) {

        username.style.border = "2px solid red";
        uname_error.style.display = "block";
        uname_error.innerHTML = '-Please enter a valid username';
        return false;

    }

    uname_error.style.display = "none";
    uname.style.border = "2px solid rgba(0, 0, 0, 0.5)";

    if (password.value == '') {

        alert("Please enter the Password");
        return false;

    }

    if (passwd_pattern.test(password.value) == false) {

        passwd.style.border = "2px solid red";
        passwd_error.style.display = "block";
        passwd_error.innerHTML = "-Please enter a valid password !";
        return false;

    }

    passwd_error.style.display = "none";
    passwd.style.border = "2px solid rgba(0, 0, 0, 0.5)";

    if (conf_passwd.value.trim() == '' || !(conf_passwd.value === passwd.value)) {

        conf_passwd.style.border = "2px solid red";
        conf_passwd_error.style.display = "block";
        conf_passwd_error.innerHTML = "-Original and Confirmed passwords don't match !";
        return false;
    }

    conf_passwd_error.style.display = "none";
    conf_passwd.style.border = "2px solid rgba(0, 0, 0, 0.5)";

    return true;
}