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

module.exports = router;