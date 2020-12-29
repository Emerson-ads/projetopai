const mongoose = require('mongoose');
 
let employeeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: ' This field is required'
    },
    valor: {
        type: String
    },
});

mongoose.model('employee', employeeSchema);