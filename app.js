import express from "express";
const app = express();

app.all('/api', ()=>{
    console.log('all');
    next();
})

app.use('/sky', ()=>{
    console.log('use');
    next();
})

app.get("/", (req, res, next)=>{
    console.log("first")
    next("route");
},
(req,res, next) => {
    console.log("first2")
    res.send("Hello")
    next()
})

app.use((err, req,res,next)=>{
    res.status(500).send("Sorry, try later!");
    next();
})
app.listen(8080);
