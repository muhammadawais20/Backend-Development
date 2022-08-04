const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    department: String 
})

const employee = mongoose.model('employee', employeeSchema);

module.exports = employee;