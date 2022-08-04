const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    email: String
})

const customer = mongoose.model('Customer', customerSchema);

module.exports = customer;