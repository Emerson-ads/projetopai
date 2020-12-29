const express = require ('express')
let router = express.Router()
const mongoose = require ('mongoose')
const Employee = mongoose.model('employee');

router.get('/', (req,res)=>{
    res.render('employee/addOrEdit.hbs', {
        viewTitle: "Devedor"
    })
});

router.post('/', (req, res)=>{
    insertRecord(req,res)
})

function insertRecord (req,res){
    let employee = new Employee();
    employee.fullname = req.body.fullName;
    employee.valor = req.body.fullValor;
    employee.save((err,doc)=>{
        if (!err){
            res.redirect('employee/list')
        }else {
            console.log('Erro during record insertion :' + err)
        }
    })
}

router.get('/list', (req, res)=> {
    Employee.find((err, docs) => {
        if(!err){
            res.render("employee/list", {
                list: docs
            });
        }else {
            console.log('Error in retrieving employee list :' + err);
        };
    });
})
module.exports = router;