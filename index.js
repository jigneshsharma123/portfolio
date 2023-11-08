const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

// setting the engine
app.set('view engine', 'ejs');
app.set('views', './views');

//making ready for use static file
app.use(express.static('public'));


app.get('/',(req,res)=> {
    res.render('index');
})
app.listen(port, (err)=> {
    if(err) {
        console.error(err);

    }
    console.log("server is running on the port: ",port);
})