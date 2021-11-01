const router = require('express').Router();

//create a new user
router.post('/', async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;