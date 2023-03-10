const jsonwebtoken = require('jsonwebtoken');
const config = require("../config");
const authDb = require("../data/authDb");

module.exports.authenticationToken = async (req, res, next) => {

    req.user = {
        'user_name': 'AnonymousUser',
        'id': -1
    }

    try {
        const token = req.cookies.jwt;
        if (token) {
            jsonwebtoken.verify(token, config.JWT_SECRET, async (err, authUser) => {
                const user = await authDb.getUserById(authUser.userId);
                req.user = user
                next();
            });
        } else {
            res.redirect("/login")
        }

    } catch (error) {
        res.redirect("/login")
    }
}


