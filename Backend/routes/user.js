const { Router } = require("express");
const router = Router();
const {User}=require("../db");
const {default: mongoose} = require("mongoose");



router.post('/signup', async (req, res) => {
    // signup
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const graduation = req.body.graduation;
    const sid = req.body.sid;
    const branch = req.body.branch;
    const college = req.body.college;
    const name = req.body.name;

    await User.create({
        username,
        name,
        email,
        password,
        graduation,
        sid,
        branch,
        college
    })
    res.json({
        message: "User created successfully"
    })


});

module.exports = router
