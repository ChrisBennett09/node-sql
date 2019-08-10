//const responseHelper = require('../response_helper');

exports.getTest = function(req, res, next) {
    return res.json({ message: 'Hello World!' });
}
