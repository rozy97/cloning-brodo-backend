const db = require("../configs/db-config");



module.exports = {
    getAllProuct = () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM products'), (err, res) => {
                !err ? resolve(res) : reject(err)
            }
        })
    }
}