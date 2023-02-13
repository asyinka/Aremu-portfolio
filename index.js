// AJAX : sending requests without reloading the 
// page
// https://formspree.io/f/xrgjlglr

fetchState();

async function handleSubmission(event) {
    event.preventDefault(); // stops the form from submitting to the action url
    
    // Method 1: directly from the input
    let email = document.querySelector("#email_ajax").value;
    let mobilenumber = document.querySelector("#mobile_ajax").value;
    let message = document.querySelector("#message_ajax").value;

    if (email == ""  || mobilenumber == "" || message == "") {
        alert("Email/Mobile Number/Message should not be empty");
        return;
    }

    // Method 2: through the form element, we then make use of their name attributes
    // let form = document.querySelector("#contact_form");
    // let email = form.email.value;
    // let mobilenumber = form.mobilenumber.value;
    // let message = form.message.value;

    // Now lets make a request to formspree
    const dataObject = {
        email,
        mobilenumber,
        message
    };
    const reqBody = JSON.stringify(dataObject);
    console.log(reqBody);

    
    const response = await fetch("https://formspree.io/f/xrgjlglr", {method: 'post', body: reqBody});
    // A request is ok if the status code is within the range of 200-299
    console.log("Status Code", response.status);

    if (!response.ok) {
        console.log("an error occured", response.statusText)
        return;
    }
    const actualResponse = await response.json();
    console.log(actualResponse);
}

async function fetchState() {
    let selectInput = document.querySelector("#states");
    let optionHtml = `<option value="">Select your States</option>`;

    // Now lets make a request to formspree
    // https://dev.violencetrack.ng/api/states/29/lgas
    const response = await fetch("https://dev.violencetrack.ng/api/states");
    const actualResponse = await response.json(); 
    const states = actualResponse.data.states;

    for (const state of states) {
        optionHtml = optionHtml + `<option value="${state.data_id}">${state.name}</option>`;
    }
    selectInput.innerHTML = optionHtml;
}


async function fetchLGA() {
    let stateInput = document.querySelector("#states");
    let stateId = stateInput.value;
    
    let lgaInput = document.querySelector("#lgas");
    let optionHtml = ``;

    const response = await fetch(`https://dev.violencetrack.ng/api/states/${stateId}/lgas`);
    const actualResponse = await response.json(); 
    const lgas = actualResponse.data.local_government_areas;

    for (const lga of lgas) {
        optionHtml = optionHtml + `<option>${lga.name}</option>`;
    }
    lgaInput.innerHTML = optionHtml;
}