const loginForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emailLogin').value.trim();
    const password  = document.querySelector('#passwordLogin').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('FAIL TRY AGAIN!');
        }
    }
};

const logout = async () => {
    console.log("testing")
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/login');
    } else {
      alert(response.statusText + "Please Login to Logout");
    }
  };

  document.querySelector('#logout').addEventListener('click', logout);

document
    .querySelector('.loginForm')
    .addEventListener('submit', loginForm);

