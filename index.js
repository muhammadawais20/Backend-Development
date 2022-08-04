const express = require("express");
const app = express();
const port = 5000;

app.use(express.json()) // for parsing application/json

const customerRoutes = require('./routes/customerRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

app.use('/customer/', customerRoutes);
app.use('/employee', employeeRoutes)

require('./config/mongoose');

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})