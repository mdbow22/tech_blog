//selector

const logout = document.getElementById('logoutBtn');

const logUserOut = async (e) => {
    //Stop page from reloading
    e.preventDefault();

    //Send logout request to server
    const didLogout = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if(didLogout.ok) {
        document.location.replace('/');
    } else {
        alert('Could not log out');
    }
}

//event listener
logout.addEventListener('click',logUserOut);