const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const pageRoutes = require("./routes/pageRoutes");
const authMiddleware = require("./middleware/auth")

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(cors());

app.use(cookieParser());

app.use('/',pageRoutes);

app.get('*',authMiddleware.authenticationToken, function(req, res){
    res.render("error/404",{
        req:req
    });
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});

