const { Post } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
    if(!req.session.loggedIn) {
        res.render('home-out');
    } else {
        res.render('home-on', {
            loggedIn: req.session.loggedIn
        });
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
                author_id: 1 //req.session.userId
            }
        });

        
        //clean up data and send to client
        if(userPosts.length > 0) {
            const posts = userPosts.get({ plain: true });
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