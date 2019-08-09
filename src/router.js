const Test = require('./controllers/test');
const Employee = require('./controllers/employee');
const Transaction = require('./controllers/transaction')

module.exports = function(app) {
    app.get('/test', Test.getTest);

    app.post('/employee', Employee.createRecord);
    app.get('/employee', Employee.getList);
    app.get('/employee/:id', Employee.getRecord);
    app.put('/employee', Employee.updateRecord);
    app.delete('/employee', Employee.deleteRecord);

    app.post('/transaction', Transaction.createRecord);
    app.get('/transaction', Transaction.getList);
    app.get('/transaction/:id', Transaction.getRecord);
    app.put('/transaction', Transaction.updateRecord);
    app.delete('/transaction', Transaction.deleteRecord);
}