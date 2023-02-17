const mysql = require('mysql2');
const config = require("../config");
const pool = mysql.createPool(config.db);

let db = {};
 
// ***Requests to the User table ***
 
db.allUser = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM users ', (error, users)=>{
            if(error){
                return reject(error);
            }
            return resolve(users);
        });
    });
};
 
 
db.getUserByEmail = (email) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM users WHERE email = ?', [email], (error, users)=>{
            if(error){
                return reject(error);
            }
            return resolve(users[0]);
        });
    });
};


db.getUserByUsername = (username) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM users WHERE user_name = ?', [username], (error, users)=>{
            if(error){
                return reject(error);
            }
            return resolve(users[0]);
        });
    });
};


db.getUserById = (id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM users WHERE id = ?', [id], (error, users)=>{
            if(error){
                return reject(error);
            }
            return resolve(users[0]);
        });
    });
};
 
 
db.insertUser = (userName, email, password) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO users (user_name, email, password) VALUES (?,  ?, ?)', [userName, email, password], (error, result)=>{
            if(error){
                return reject(error);
            }
             
              return resolve(result.insertId);
        });
    });
};
 
 
db.updateUser = (userName, role, email, password, id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE users SET user_name = ?, role= ?, email= ?, password=? WHERE id = ?', [userName, role, email, password, id], (error)=>{
            if(error){
                return reject(error);
            }
             
              return resolve();
        });
    });
};
 
 
 
db.deleteUser = (id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('DELETE FROM users WHERE id = ?', [id], (error)=>{
            if(error){
                return reject(error);
            }
            return resolve(console.log("User deleted"));
        });
    });
};
 
 
 
    
module.exports = db