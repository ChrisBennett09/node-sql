const Test = require('./controllers/test');
const Employee = require('./controllers/employee');
const Transaction = require('./controllers/transaction')
const Department = require('./controllers/department')
const Attendance = require('./controllers/attendance')

module.exports = function(app) {
    //test
    app.get('/test', Test.getTest);

    //employee
    app.post('/employee', Employee.createRecord);
    app.get('/employee', Employee.getList);
    app.get('/employee/:id', Employee.getRecord);
    app.put('/employee', Employee.updateRecord);
    app.delete('/employee', Employee.deleteRecord);

    //transaction
    app.post('/transaction', Transaction.createRecord);
    app.get('/transaction', Transaction.getList);
    app.get('/transaction/:id', Transaction.getRecord);
    app.put('/transaction', Transaction.updateRecord);
    app.delete('/transaction', Transaction.deleteRecord);

    //department
    app.post('/department', Department.createRecord);
    app.get('/department', Department.getList);
    app.get('/department/:id', Department.getRecord);
    app.put('/department', Department.updateRecord);
    app.delete('/department', Department.deleteRecord);

    //attendance
    app.post('/attendance', Attendance.createRecord);
    app.get('/attendance', Attendance.getList);
    app.get('/attendance/:id', Attendance.getRecord);
    app.put('/attendance', Attendance.updateRecord);
    app.delete('/attendance', Attendance.deleteRecord);
}