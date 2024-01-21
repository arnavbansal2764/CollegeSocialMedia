const { Router } = require("express");
const router = Router();
const { User } = require("../db/index");
// const {default: mongoose} = require("mongoose");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

router.post('/signup',async (req, res) => {
    // signup
    

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const graduation = req.body.graduation;
    const sid = req.body.sid;
    const branch = req.body.branch;
    const college = req.body.college;
    const name = req.body.name;
    const publicName = "will decide later"
    

    const existUsername = await User.findOne({ username });
    const existSid = await User.findOne({ sid });
    const existemail = await User.findOne({ email });
    if (existUsername) {
        res.status(403).json({
            message: "Username already taken !!",
            username:null,
        })
    }
    else if (existSid) {
        res.status(403).json({
            message: "Student already registered",
            username:null,
        })
    }
    else if (existemail) {
        res.status(403).json({
            message: "Email already registered",
            username:null,
        })
    }
    else {
        

        await User.create({
            username,
            name,
            email,
            password,
            graduation,
            sid,
            branch,
            college,
            publicName
        })
        res.json({
            message: "User created successfully",
            username:username,
            
        })
    }

});

router.post('/signin', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({message:"Signed In" ,username:username})
    }
    else {
        res.status(411).json({
            message: "Incorrect email or password ",
            username:null
        })
    }

});

module.exports = router
