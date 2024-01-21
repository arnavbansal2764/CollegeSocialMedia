const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const userRouter = require("./routes/user");
app.use(bodyParser.json());
app.use(cors({origin:["http://localhost:5173","http://localhost:5174"]}));
const huehue = ()=>{console.log("Server REached")}
app.get("/hey",(req,res)=>{
    res.send("hello");
})
app.use("/user",huehue,userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
