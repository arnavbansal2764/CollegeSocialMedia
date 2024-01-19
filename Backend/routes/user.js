const { Router } = require("express");
const router = Router();
const {User}=require("../db/index");

router.post('/signup', async(req, res) => {
    // signup
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const graduation = req.body.graduation;
    const sid = req.body.sid;
    const branch = req.body.branch;
    const college = req.body.college;
    const name = req.body.name;

    
    const existUsername = await User.findOne({username});
    const existSid = await User.findOne({sid});
    const existEmail = await User.findOne({email});
    if(existUsername)
    {
        res.status(403).json({
            message:"Username already taken !!"
        })
    }
    else if(existSid)
    {
        res.status(403).json({
            message:"Student already registered"
        })
    }
    else if(existEmail)
    {
        res.status(403).json({
            message : "Email already registered"
        })
    }
    else{
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
    }

});

module.exports = router
