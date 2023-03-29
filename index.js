const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const { route } = require('./routers/wishlishrouters');
const fileUpload = require('./Utils/fileUpload')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const ConnectDB = require('./config/db');
app.use("/uploads/images", express.static(path.join("uploads", "images")));
ConnectDB()
app.use(express.urlencoded({ extended: false }));
app.get("/s",(req,res)=>{
    res.send("helloowwwww......")
})

app.use(cors())

app.use('/api/AllCategris',require('./routers/allcetegris'))
app.use('/api/signup',require('./routers/signuprouters'))
app.use('/api/wishlish', require('./routers/wishlishrouters'));
app.use('/api/addcard',require('./routers/addcardrouters'))
app.use('/api/address',require("./routers/addressrouters"))

console.log("smpdr");

app.listen(port, () => {
    console.log(`port is colled ${port}`);
});


app.post("/create",fileUpload("profile").array("photo", 5),

    (req, res) => {
        console.log("====dddd.body==>>", req.body);
        console.log("------->>>", req.files);
        res.json({ message: "image added...", image: `https://localhost:8000/uploads/images/profile/${req.files[0].filename}` })
    }
);