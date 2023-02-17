const pageDb = require("../data/pageDb");
const authDb = require("../data/authDb");

const config = require("../config")
const loginUrl = config.loginUrl

const jsonwebtoken = require('jsonwebtoken');
const { compareSync } = require("bcrypt");

module.exports.homePage = async function (req, res) {

    try {
        res.render("dashboard/index", {
            req: req
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports.patientListPage = async function (req, res) {

    try {
        res.render("patient/list", {
            req: req
        });
    }
    catch (err) {
        console.log(err);
    }
}


module.exports.loginPage = async function (req, res) {
    res.render("auth/login", {
        req: req
    });
}


const createToken = (userId) => {
    return jsonwebtoken.sign({ userId }, config.JWT_SECRET, {
        expiresIn: '1d',
    });
};

module.exports.login = async function (req, res) {
    try {
        const { username, password } = req.body;
        var error_messages = []
        const user = await authDb.getUserByUsername(username)

        let same = false;

        if (user) {

            same = await compareSync(password, user.password);
        } else {
            error_messages.push('There is no such user')
        }

        if (same) {
            const token = createToken(user.id);

            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24,
            });

            res.redirect('/');

        } else {
            error_messages.push('Paswords are not matched');
            res.render("auth/login", { "error_messages": error_messages });
        }


    } catch (error) {
        console.log("hatalar", error)
        error_messages.push(String(error))
        res.render("auth/login", { "error_messages": error_messages });
    }
}

module.exports.logout = async function (req, res) {

    res.cookie('jwt', '', {
        maxAge: 1,
    });
    req.user = null
    res.redirect('/');

}