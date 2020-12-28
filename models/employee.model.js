const mongoose = require('mongoose');
 
let employeeSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
});

mongoose.model('employee', employeeSchema);