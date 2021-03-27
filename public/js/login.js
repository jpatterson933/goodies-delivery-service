const loginForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emailLogin').value.trim();
    const password  = document.querySelector('#passwordLogin').value.trim();
    const userT = document.querySelector('#userType').value;

    if (email && password && userT) {
        const response = await fetch('', {
            method: 'POST',
            body: JSON.stringify({ email, passowrd, userT}),
            headers: {},
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('FAIL TRY AGAIN!');
        }
    }
};

const signiForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#nameSignup').value.trim();
    const email= document.querySelector('#emailSignup').value.trim();
    const address= document.querySelector('#autoAddress').value.trim();
    const dob= document.querySelector('#dobSignup').value.trim();
    const phoneNum= document.querySelector('#phoneSignup').value.trim();
    const password= document.querySelector('#passwordSignup').value.trim();
    const userType= document.querySelector('#usrTypSignup').value;


    if (name && email && address && dob && phoneNum && password && userType){
        const response = await fetch('', {
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

document
    .querySelector('.loginForm')
    .addEventListener('submit', loginForm);

