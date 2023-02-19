const allDataJson = require("./cityanddistrictdata.json")

let db = {}

db.getAllCities = () => {

    let cityList = []

    for (let i = 0; i < allDataJson.length; i++) {
        cityList.push({ "name": allDataJson[i].name, code: allDataJson[i].alpha_2_code })
    }

    return cityList

}

db.getAllDistricts = () => {

    let districtList = []

    for (let i = 0; i < allDataJson.length; i++) {

        for (let j = 0; j < allDataJson[i].towns.length; j++) {
            districtList.push({ "cityCode":allDataJson[i].alpha_2_code ,"name": allDataJson[i].towns[j].name })
        }

    }

    return districtList

}




module.exports = db;