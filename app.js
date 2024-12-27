import express from "express";
const app = express();

app.get("/", (req, res, next)=>{
    console.log(req)
    res.send("Hello")
})




app.listen(8080);
