fetch('/data.json')
    .then((response) => response.json())
    .then((data) => console.log("resolved", data))

    .catch((err) => console.log("error", err));

// console.log(myData);



console.log("this code runs after the first");

// for (let index = 0; index < 2; index++) {
//     // const element = array[index];

//     fetch("/data.json")
//         .then((response) => {
//         console.log("resolved", response);
//         return response.json();
//     })
//         .then(data => {
//         console.log(data[index].text);
//     })
//         .catch((err) => {
//         console.log('rejected', err)
//     });
    
// }

let ContactForm = document.querySelector("#my-contact-form");
// let myEmail = document.querySelector("#email-input").value;
// let myMobile = document.querySelector("#email-input").value;
// let clientsMessage = document.querySelector("#message-input").value;


function mySubmitButton(event){

    event.preventDefault(); //this stops the form from submitting to the action link

    let clientEmail = ContactForm.email.value;
    let clientNumber = ContactForm.mobilenumber.value;
    let clientMessage = ContactForm.message.value;

    //this checks if the clients fills the input completely
    if (clientEmail == "" || clientNumber == "" || clientMessage == "") {
        alert("Email/Mobile Number/Message is invalid");
        return;
    }
    //this holds the client input in an object format
    let clientObject = {
        Email: clientEmail,
        Number: clientNumber,
        Message: clientMessage
    }
    //this converts the client object into a JSON string
    let clientObj = JSON.stringify(clientObject);

    console.log(clientObj);

    fetch('/data.json', {method: "post", body: clientObj})
                        // .then((response) => response.json())
                        .then((data) => console.log("resolved", data))

                        .catch((err) => console.log("Red Alert", err));

}
