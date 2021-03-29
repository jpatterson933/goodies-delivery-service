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

document
    .querySelector('.login-form')
    .addEventListener('submit', loginForm);

