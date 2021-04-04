const verifyPw = () => {
    const password = document.querySelector('#passwordSignup').value.trim();
    const verifyPassword = document.querySelector('#verifyPassword').value.trim();

    if (password !== verifyPassword) {
        alert("Your passwords do not match!")
    } else return;
}
document
    .querySelector('.signup-form')
    .addEventListener('submit', verifyPw);