const { Comment } = require('../../models');
const router = require('express').Router();

//Add a comment to the database
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            body: req.body.body,
            post_id: req.body.post,
            author_id: req.session.userId
        });

        res.status(200).json(newComment);

    } catch (err) {
        res.status(500).json('Internal Server Error');
    }
});

module.exports = router;