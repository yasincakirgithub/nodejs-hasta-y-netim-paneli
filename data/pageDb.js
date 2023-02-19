const mysql = require("mysql2");
const config = require("../config");
const pool = mysql.createPool(config.db);

let db = {};

db.getActiveClinicsByDistrictAndCity = (status=1,district,city) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM clinics WHERE status = ? and district = ? and city = ? ',[status,district,city], (error, clinics)=>{
            if(error){
                return reject(error);
            }
            return resolve(clinics);
        });
    });
};

db.getActiveClinics = (status=1) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM clinics WHERE status = ?',[status], (error, clinics)=>{
            if(error){
                return reject(error);
            }
            return resolve(clinics);
        });
    });
};


module.exports = db