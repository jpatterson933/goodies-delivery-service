const signupForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#nameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const address = document.querySelector('#autoAddress').value.trim();
    const dob = document.querySelector('#dobSignup').value.trim();
    const phoneNum = document.querySelector('#phoneSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
    const verifyPassword = document.querySelector('#verifyPassword').value.trim(); //we will use this to verify password
    const userType= document.querySelector('#userType').value;


    if (name && email && address && dob && phoneNum && password && userType){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, address, dob, phoneNum, password, userType}),
            headers: {},
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign-up :(');
        }
    }
};