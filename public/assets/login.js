//create a new user

//Selectors
const newUser = document.getElementById('newUsername');
const newEmail = document.getElementById('newEmail');
const newPassword = document.getElementById('newPassword');
const signUp = document.getElementById('signUp');

//Send new user data to server to create the user
const signUpUser = async (e) => {
    //prevent page from reloading
    e.preventDefault();

    if(newUser.value && newPassword.value && newEmail.value) {
        //package data into an object
        const userData = {
            username: newUser.value,
            password: newPassword.value,
            email: newEmail.value
        }

        //send data to server
        const createUser = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json'}
        });

        if(createUser.ok) {
            document.location.reload();
        } else {
            alert('could not sign you up');
        }
    }
}

//event listener
signUp.addEventListener('click', signUpUser);