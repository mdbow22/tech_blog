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

module.exports = router;