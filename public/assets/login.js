//Login an existing user

//Selectors
const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('loginBtn');

//Send data to server to login user
const loginUser = async (e) => {
    //stop page from reloading
    e.preventDefault();

    //Package data
    const loginInfo = {
        username: username.value,
        password: password.value
    }

    //send data to server
    const loginStatus = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: { 'Content-Type': 'application/json'}
    });

    if(loginStatus.ok) {
        document.location.replace('/');
    } else {
        alert('incorrect username and/or password');
    }
}

//Event listener
login.addEventListener('click', loginUser);
