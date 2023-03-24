const express = require('express');
const app = express();
const cors = require('cors')
const { route } = require('./routers/wishlishrouters');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const ConnectDB = require('./config/db');
ConnectDB()
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/api/sarees',require('./datarouter'))


app.use('/api/wishlish', require('./routers/wishlishrouters'));

app.use('/api/signup',require('./routers/signuprouters'))

app.use('/api/addcard',require('./routers/addcardrouters'))
app.get("/server",(req,res)=>{
    res.send("Hello servess......")
})
app.use('/api/address',require("./routers/addressrouters"))


app.listen(port, () => {
    console.log(`port is colled ${port}`);
});