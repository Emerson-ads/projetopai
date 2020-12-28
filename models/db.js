const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/employeeDB', {useNewUrlParser: true}, (err)=>{
    if (!err) { console.log('MongoDB connection Succeeded.')}
 });

 require ('./employee.model');