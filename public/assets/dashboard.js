//global variables
let postId;

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

//Show a Post to edit
const editPost = async (e) => {

    postId = e.relatedTarget.getAttribute('data-id');

    //fetch post contents and convert to object
    const postToEdit = await fetch(`/api/posts/${postId}`);

    const post = await postToEdit.json();

    //Place post contents into modal inputs
    document.getElementById('editedTitle').value = post.post_title;
    document.getElementById('editedBody').value = post.post_body;

};

//save an edited post
const savePost = async (e) => {
    e.preventDefault;

    //package data for server
    const postData = {
        title: document.getElementById('editedTitle').value,
        body: document.getElementById('editedBody').value
    }

    //send new data to server
    const updatePost = await fetch(`/api/posts/${postId}`,
    {
        method: 'PUT',
        body: JSON.stringify(postData),
        headers: { 'Content-Type': 'application/json'}
    });

    if(updatePost.ok) {
        document.location.reload();
    } else {
        alert('unable to update post');
    }
};

//Event Listeners
document.getElementById('newPostBtn').addEventListener('click', createPost);
document.getElementById('editPostModal').addEventListener('shown.bs.modal', editPost);
document.getElementById('editPostBtn').addEventListener('click', savePost);