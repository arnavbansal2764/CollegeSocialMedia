const { Router } = require("express");
const router = Router();



router.post('/signup', (req, res) => {
    // signup
    const username = req.body.username;
    const password = req.body.password;
    
});

module.exports = router
