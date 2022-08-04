const {getEmployeeService, addEmployeeService, updateEmployeeService, deleteEmployeeService} = require('../Services/employee');

const getEmployee = (req, res) => {
    const {name, id} = req.body;

    getEmployeeService(name, id);
    res.status(200).send({"message": "Hello to employees!"})
}

const addEmployee = (req, res) => {
    const {name, department } = req.body;

    addEmployeeService(name, department);
    res.status(200).send({"message" : "Employee addded successfully!"})
}

const updateEmployee = (req, res) => {
    const {name, department } = req.body;

    updateEmployeeService(name, department);
    res.status(200).send({"message": "Employee updated successfully!"})
}

const deleteEmployee = (req, res) => {
    const {name, department } = req.body;

    deleteEmployeeService(name, department);
    res.status(200).send({"message": "Employee deleted successfully!"})
}

module.exports.getEmployee = getEmployee;
module.exports.addEmployee = addEmployee;
module.exports.updateEmployee = updateEmployee;
module.exports.deleteEmployee = deleteEmployee;