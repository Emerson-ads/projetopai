const mongoose = require('mongoose');
 
let employeeSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    valor: {
        type: String
    },
});

mongoose.model('employee', employeeSchema);