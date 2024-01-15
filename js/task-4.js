const formElem = document.querySelector('.login-form');
formElem.addEventListener( 'submit', onFormSubmit);
    
    
    
function onFormSubmit (event) { 
    event.preventDefault();

    const email = formElem.elements.email.value.trim();
    const password = formElem.elements.password.value.trim();
    

    if( email === '' || password === '') {
        return alert('All form fields must be filled in');
        
    }
    
    const formData = {
        email,
        password,
    }

    console.log(formData);

    formElem.reset();
};

 
 