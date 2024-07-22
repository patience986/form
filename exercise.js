//function that submits my form
function submitForm() {
    //collect form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phoneNumber= document.getElementById("phoneNumber").value;

    //validate email format
    const emailFormat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    //validate phone number format
    const phoneFormat = /^\+?\d{1,15}$/;

    //validate form data
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill out all fields");
        return;
    }
    else if (!email.match(emailFormat)) {
        alert("Please enter a valid email");
        return;
    }
    else if (confirmPassword !== password) {
        alert("Passwords do not match");
        return;
    }
    else if (!phoneFormat.test(phoneNumber)) {
        alert("Please enter a valid phone number");
        return;
    }
    else {
        alert("Form submitted successfully");
        // clear form inputs
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("phoneNumber").value = "";
    }
}

// add event listener to form submit button
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    submitForm();
});
