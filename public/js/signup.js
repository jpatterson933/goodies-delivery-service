const signupForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
    const verifyPassword = document.querySelector('#verifyPassword').value.trim(); //we will use this to verify password
    const name = document.querySelector('#nameSignup').value.trim();
    const birth = document.querySelector('#dobSignup').value.trim();
    const cell = document.querySelector('#phoneSignup').value.trim();
    const street = document.querySelector('#street_number').value.trim();
    const city = document.querySelector('#locality').value.trim();
    const state = document.querySelector('#administrative_area_level_1').value.trim();
    const zip = document.querySelector('#postal_code').value.trim();
    const country = document.querySelector('#country').value.trim();

//send user id to response
    if (email && password && name && birth && cell ){
        console.log("we made it");
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password, name, birth, cell}),
            headers: {'Content-Type': 'application/json'},
        }).then(response => {
            return response.json();
        }).then(data => {
            fetch('/api/address', {
                method: 'POST',
                //pass response.id to this so it will connect our keys
                body: JSON.stringify({ street, city, state, zip, country, user_id: data.id }),
                //this is saying that we are sending json with this post request
                headers: {'Content-Type': 'application/json'},
            }).then(response => {
                if (response.ok) {
                    document.location.replace('/profile');
                } else {
                    alert('Failed to sign-up :(');
                }
            })
        })
    }  
    if (password !== verifyPassword) {
        alert("Your passwords do not match!")
    }
};
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupForm);