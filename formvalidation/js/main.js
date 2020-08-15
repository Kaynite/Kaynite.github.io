const form = document.getElementById("form"),
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

// Email Address Validation
function checkEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Email is Not Valid!");
    }
}

// Check for empty fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value == "") {
            showError(input, `This Field is Required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check for length of input values
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `This Field Must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `The Maximum value is ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check for Passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match!");
    }
}

// Event(Submit) Listener
form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 10);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});
