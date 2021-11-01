const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

//create a new user
router.post('/', async (req, res) => {
    try {
        //Hash password before storing in database
        const hashword = await bcrypt.hash(req.body.password, 10);

        const newUser = User.create({
            username: req.body.username,
            password: hashword,
            email: req.body.email
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(newUser);
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//login an existing user
router.post('/login', async (req, res) => {
    try {
        //search for user in db
        const theUser = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        //send back 404 if user not found
        if(theUser === null) {
            res.status(404).json('Username or password is incorrect');
            return;
        }

        //verify that password passed matches username's pw
        const matches = await bcrypt.compare(req.body.password, theUser.password);

        //send back 404 if password is a mismatch
        if(!matches) {
            res.status(404).json('Username or password is incorrect');
            return;
        }

        //save the session so they're logged in
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json('Now logged in');
        })

    } catch (err) {
        console.log(err);
        res.status(500).json('Unable to log in');
    }
});

module.exports = router;