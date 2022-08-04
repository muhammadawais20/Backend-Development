const customer = require('../model/customerSchema');

const getCustomerService = async (name, email) => {
    const getCustomer = await customer.find().select('-email');   //get all fields except email
    console.log("Customer's List", getCustomer);
}

const addCustomerService = async (name, email) => {

    // const user = new customer({name , email});
    const addCustomer = await customer.create({name, email});
    console.log("cust" , addCustomer)
}

const updateCustomerService = async () => {
    const updateCustomer = await customer.findByIdAndUpdate('62eb6bcc8761566e3a6785c2',{name: "Muhammad Awais", email: "awais12345@gmail.com"});
    console.log("Update Customer", updateCustomer);
}

const deleteCustomerService = async () => {
    const deleteCustomer  = await customer.findByIdAndDelete('62eb6bcc8761566e3a6785c2')
    console.log("Customer Deleted", deleteCustomer);
}


module.exports.getCustomerService = getCustomerService //get
module.exports.addCustomerService = addCustomerService;  //post
module.exports.updateCustomerService = updateCustomerService; //put
module.exports.deleteCustomerService = deleteCustomerService; //delete