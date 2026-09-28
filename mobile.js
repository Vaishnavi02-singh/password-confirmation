function checkPassword() {

    let password = document.getElementById("a").value;
    let confirmPassword = document.getElementById("b").value;
    let message = document.getElementById("message");

    // Empty field check
    if (password === "" || confirmPassword === "") {
        message.innerHTML = "Please enter both passwords";
        message.style.color = "red";
        return;
    }

    // Password length check
    if (password.length < 8) {
        message.innerHTML = "Password must be at least 8 characters";
        message.style.color = "red";
        return;
    }

    // Character check
    let character = /[A-Za-z]/;

    // Number check
    let number = /[0-9]/;

    // Special symbol check
    let special = /[!@#$%^&*]/;

    if (!character.test(password)) {
        message.innerHTML = "Password must contain a character";
        message.style.color = "red";
        return;
    }

    if (!number.test(password)) {
        message.innerHTML = "Password must contain a number";
        message.style.color = "red";
        return;
    }

    if (!special.test(password)) {
        message.innerHTML = "Password must contain a special symbol";
        message.style.color = "red";
        return;
    }

    // Password matching
    if (password === confirmPassword) {
        message.innerHTML = "✓ Password Confirmed";
        message.style.color = "green";
    } else {
        message.innerHTML = "✗ Passwords do not match";
        message.style.color = "red";
    }
}