const express = require('express');
const router = express.Router();

const {addCustomer, updateCustomer, deleteCustomer, getCustomer} = require('../controller/customerHandler');

router.get('/get', getCustomer);
router.post('/add',  addCustomer);
router.put('/update', updateCustomer);
router.delete('/delete', deleteCustomer);

module.exports =  router;