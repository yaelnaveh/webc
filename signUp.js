 console.log('hiiiii1')

 const form=document.querySelector('#customerForm')
 const firstName=document.querySelector('#firstName')
 const lastName=document.querySelector('#lastName')
 const phone=document.querySelector('#phone')
 const email=document.querySelector('#email')
 const password=document.querySelector('#password')
 const password2=document.querySelector('#password2')
 const city=document.querySelector('#city')
 const street=document.querySelector('#street')
 const number=document.querySelector('#number')
 form.addEventListener('submit',e=> {
     e.preventDefault()
     validateInputs();
 })

 const setError=(element, message)=>{

    const inputControl= element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

 }

 const setSuccess= element=>{
    const inputControl= element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

 }

 const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

 // phoneNumber
 const isOnlyNum = num => {
    const re = /^\d{10}$/;
    return re.test(num);
}

// password
 function isStrongPassword(passwordValue) {
    // Regular expressions to check for various criteria
    let hasUpperCase = /[A-Z]/.test(passwordValue); // Check if the password has at least one uppercase letter
    let hasLowerCase = /[a-z]/.test(passwordValue); // Check if the password has at least one lowercase letter
    let hasDigit = /\d/.test(passwordValue); // Check if the password has at least one digit
    let hasSpecialChar = /[!@#$%^&*()\-_=+{};:,<.>]/.test(passwordValue); // Check if the password has at least one special character

    // Check if the password meets all criteria
     if (passwordValue.length < 8 || passwordValue.length > 14) {
        setError(password, 'Password must be 8-14 characters long')
        return false;
    }
    else if (!hasUpperCase) {
        setError(password, 'A capital letter is missing')
        return false;
    } else if (!hasLowerCase) {
        setError(password, 'A lowercase letter is missing')
        return false;
    }

    else if (!hasDigit) {
        setError(password, 'A digit is missing')
        return false;
    }
    else if (!hasSpecialChar) {
        setError(password, 'A special character is missing')
        return false;
    }

    // Password meets all criteria
    return true;
}

const validateInputs=()=>{
    const firstNameValue=firstName.value.trim()
    const lastNameValue=lastName.value.trim()
    const phoneValue=phone.value.trim()
    const emailValue=email.value.trim()
    const passwordValue=password.value.trim()
    const password2Value=password2.value.trim()
    const cityValue=city.value.trim()
    const streetValue=street.value.trim()
    const numberValue=number.value.trim()


    // firstName
    if(firstNameValue===''){
        setError(firstName, 'first name is required!')

    }else{
        setSuccess(firstName);
    }

    // lastName
    if(lastNameValue===''){
        setError(lastName, 'last name is required!')

    }else{
        setSuccess(lastName);
    }

    // phone
    if(phoneValue === '') {
        setError(phone, 'phone number is required');
    } else if (phoneValue.length !== 10) {
        setError(phone, 'Phone number must be 10 digits');
    }else if (!isOnlyNum(phoneValue)) {
        setError(phone, 'Phone number must apply digits only');
    }else if (phoneValue.charAt(0)!=='0') {
        setError(phone, 'A phone number must start with the digit 0');
    } else {
        setSuccess(phone);
    }

    // email
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    // password
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (!isStrongPassword(passwordValue)) {
        // setError(password, 'Password must be 8-14 character.')
    } else {
        setSuccess(password);
    }

    // password2
    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    // address
    // city

 }




