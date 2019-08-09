const sql = require('mssql')
const config = require('../config');

sql.connect(config, function(error) {
    if (error) {
        console.log('Error connectin to DB', error);
        return;
    }

    console.log('DB connection established');
});

module.exports = sql;
