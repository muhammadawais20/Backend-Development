const employee = require('../model/employeeSchema');

const getEmployeeService = async (name, department) => {
    const getEmployee = await employee.find();
    console.log("Employee's List", getEmployee);
}

const addEmployeeService = async (name, department) => {

    const addEmployee = await employee.create({ name, department });
    console.log("Employee Added!", addEmployee);
}

const updateEmployeeService = async (name, department) => {
    const updateEmployee = await employee.findByIdAndUpdate('62eb7727afe130774b450963', { name, department })
    console.log("Employee Updated!", updateEmployee);
}

const deleteEmployeeService = async (name, department) => {
    const deleteEmployee = await employee.findByIdAndDelete('62eb7724afe130774b450961');
    console.log("Employee Deleted!", deleteEmployee);
}

module.exports.getEmployeeService = getEmployeeService; //get
module.exports.addEmployeeService = addEmployeeService; //post
module.exports.updateEmployeeService = updateEmployeeService; //put
module.exports.deleteEmployeeService = deleteEmployeeService; //delete