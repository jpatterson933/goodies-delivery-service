


const signupForm = async (event) => {
    event.preventDefault();

    const type= document.querySelector('#userType').value;
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
    const verifyPassword = document.querySelector('#verifyPassword').value.trim(); //we will use this to verify password
    const name = document.querySelector('#nameSignup').value.trim();
    const birth = document.querySelector('#dobSignup').value.trim();
    const cell = document.querySelector('#phoneSignup').value.trim();
    const address = document.querySelector('#autoAddress').value.trim();


    if (name && email && address && birth && cell && password && type){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, address, birth, cell, password, type}),
            headers: {},
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign-up :(');
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupForm);