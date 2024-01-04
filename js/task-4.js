const formElem = document.querySelector('.login-form');
formElem.addEventListener( 'submit', onFormSubmit);
    
    
    
function onFormSubmit (event) { 
    event.preventDefault();

    const emailValue = formElem.elements.email.value.trim();
    const passwordValue = formElem.elements.password.value.trim();
    

    if( emailValue === '' || passwordValue === '') {
        return alert('All form fields must be filled in');
        
    }
    
    const formData = {
        emailValue,
        passwordValue,
    }

    console.log(formData);

    formElem.reset();
};

 
 