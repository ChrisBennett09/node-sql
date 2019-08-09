//const responseHelper = require('../response_helper');

exports.createRecord = function(req, res, next) {
    return res.json({ message: '123' });
}

exports.getList = function(req, res, next) {
    return res.json({ message: 'Chris' });
}

exports.getRecord = function(req, res, next) {
    return res.json({ message: '124' });
}

exports.updateRecord = function(req, res, next) {
    return res.json({ message: 'Hello World!' });
}

exports.deleteRecord = function(req, res, next) {
    return res.json({ message: 'Hello World!' });
}