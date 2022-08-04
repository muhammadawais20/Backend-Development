const { addCustomerService, getCustomerService, updateCustomerService, deleteCustomerService } = require("../Services/customer");

const getCustomer = (req, res) => {
    const {name, email} = req.body;

    getCustomerService(name, email);
    res.status(200).send({"message": "Hello to customers!"})
}

const addCustomer = (req, res) => {
    const {name, email} = req.body;

    addCustomerService(name, email);
    res.status(200).send({"message": "Customer added successfully!"});
}

const updateCustomer = (req, res) => {
    const {name, email} = req.body;

    updateCustomerService(name, email);
    res.status(200).send({"message": "Customer updated successfully!"})
}

const deleteCustomer = (req, res) => {
    const {name, email} = req.body;

    deleteCustomerService(name, email);
    res.status(200).send({"message": "Customer deleted successfully!"})
}

module.exports.getCustomer = getCustomer;
module.exports.addCustomer = addCustomer; 
module.exports.updateCustomer = updateCustomer;
module.exports.deleteCustomer = deleteCustomer;