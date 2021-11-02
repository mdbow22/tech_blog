//Create a new post

const createPost = async (e) => {
    e.preventDefault();
    //package data for server
    const postData = {
        title: document.getElementById('postTitle').value,
        body: document.getElementById('postBody').value
    }

    //send post to server
    const newPost = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { 'Content-Type': 'application/json'}
    });

    //if ok, reload page
    if(newPost.ok) {
        document.location.reload();
    } else {
        alert('error submitting post');
    }
};

//Event Listeners
document.getElementById('newPostBtn').addEventListener('click',createPost);