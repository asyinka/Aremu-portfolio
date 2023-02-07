// AJAX : sending requests without reloading the 
// page
// https://formspree.io/f/xrgjlglr

function handleSubmission(event) {
    event.preventDefault(); // stops the form from submitting to the action url
    
    // Method 1: directly from the input
    let email = document.querySelector("#email_ajax").value;
    let mobilenumber = document.querySelector("#mobile_ajax").value;
    let message = document.querySelector("#message_ajax").value;

    // Method 2: through the form element
    // let form = document.querySelector("#contact_form");
    // let email = form.email.value;
    // let mobilenumber = form.mobilenumber.value;
    // let message = form.message.value;

    console.log(email, mobilenumber, message)
}
