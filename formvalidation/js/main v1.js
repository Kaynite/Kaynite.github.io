const
    form = document.getElementById("form"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    password2 = document.getElementById("password2");

// Show Error Outline and Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    formControl.querySelector("small").textContent = message;
}

// Show Success Outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event(Submit) Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (username.value === "") {
        showError(username, "Username is Required.");
    } else {
        showSuccess(username);
    }

    if (username.value.length < 3) {
        showError(username, "Username Must be at least 3 characters")
    } else if(username.value.length > 10) {
        showError(username, "Username Must be less than 10 characters")
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, "Email is Required.");
    } else if(!validateEmail(email.value)) {
        showError(email, "Enter Valid Email Address!")
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "Password is Required.");
    } else {
        showSuccess(password);
    }

    if (password2.value === "") {
        showError(password2, "Password is Required.");
    } else {
        showSuccess(password2);
    }

    if(password.value != password2.value) {
        showError(password2, "Passwords do not match!")
    }

    if (password.value.length < 6) {
        showError(password, "Username Must be at least 6 characters")
    } else if(password.value.length > 25) {
        showError(password, "Username Must be less than 25 characters")
    } else {
        showSuccess(password);
    }
})