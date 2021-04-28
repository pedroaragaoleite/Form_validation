const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
    // get the parentElement from the input
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

// Show success 
function showSuccess(input, message) {
    // get the parentElement from the input
    const formControl = input.parentElement;
    console.log(formControl);
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

function checkValidEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

// check input Length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

//Check password match
function checkPassword(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, `${getFieldName(input2)} Password not match!`);
    }
};

// get Field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listener
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkValidEmail(email);
    checkPassword(password, password2);
})

// //Event Listener
// form.addEventListener('submit',(e) =>{
//     e.preventDefault();

//     if(username.value === ''){
//         showError(username, 'Username is required');
//     } else {
//         showSuccess(username);
//     }
//     if(email.value === ''){
//         showError(email, 'email is required');
//     } else if(!checkValidEmail(email.value)) {
//         showError(email, 'email is not valid');
//     } else {
//         showSuccess(email);
//     }
//     if(password.value === ''){
//         showError(password, 'password is required');
//     } else {
//         showSuccess(password);
//     }
//     if(password.value === ''){
//         showError(password, 'password is required');
//     } else {
//         showSuccess(password);
//     }
// })
