//add a comment

//send comment to server
const postComment = async (e) => {
    //get postID from URL
    const url = new URL(document.location);
    const postId = url.pathname.substring(1);
    const postNum = parseInt(postId, 10);

    //get value of textarea and verify it has at least one character
    const commentBody = document.getElementById('newComment');
    if(commentBody.length < 1) {
        return;
    }

    //package data
    const commentInfo = {
        body: commentBody.value,
        post: postNum
    }

    //send to server
    const newComment = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(commentInfo),
        headers: { 'Content-Type': 'application/json'}
    });

    if(newComment.ok) {
        commentBody.value = '';
        document.location.reload();
    } else {
        alert('unable to post comment');
    }

}

//event listener
document.getElementById('saveComment').addEventListener('click',postComment);