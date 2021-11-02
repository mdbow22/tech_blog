const { Post } = require('../../models');
const router = require('express').Router();

//Create a new post
router.post('/', async (req, res) => {
    try {

        //add post to db
        const newPost = await Post.create({
            post_title: req.body.title,
            post_body: req.body.body,
            author_id: req.session.userId
        });

        res.status(200).json(newPost);

    } catch (err) {
        res.status(500).json(err);
    }

});

//Edit a Post
router.put('/:id', async (req, res) => {
    try {
        const edited = await Post.update(
            {
                post_title: req.body.title,
                post_body: req.body.body
            },
            {
                where: {
                    id: req.params.id
                }
            });
        
        res.status(200).json(edited);
        
    } catch (err) {
        res.status(500).json('Unable to update post');
    }
    
});

module.exports = router;