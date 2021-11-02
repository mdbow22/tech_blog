const { Post, User } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        if(!req.session.loggedIn) {
            res.render('home-out');
        } else {

            //get all posts in db and include post's author
            const posts = await Post.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    }
                ],
                //order posts by most recent first
                order: [['createdAt', 'DESC']]
            });

            const post = posts.map((el) => el.get({ plain: true }));

            //res.status(200).json(allPosts);

            res.render('home-on', {
                post,
                loggedIn: req.session.loggedIn
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
    
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/dashboard', async (req, res) => {

    try {
        //make sure user is logged in
        if(!req.session.loggedIn) {
            res.redirect('/login');
            return;
        }

        //retrieve all of the users posts from db
        const userPosts = await Post.findAll({
            where: {
                author_id: req.session.userId
            }
        });
        
        //clean up data and send to client
        if(userPosts.length > 0) {
            const posts = userPosts.map((post) => post.get({ plain: true }));
            res.render('dashboard', {posts, loggedIn: req.session.loggedIn});
        } else {
            res.render('dashboard', {
                loggedIn: req.session.loggedIn,
                noPosts: true    
            });
        }

        
        

    } catch (err) {
        res.status(500).json('error loading page');
    }
});

module.exports = router;