const express = require ('express')

let router = express.Router()

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
    employee.fullname = req.body.fullname;
    employee.value = req.body.value;
    employee.save((err,doc)=>{
        if (!err){
            res.redirect('employee/list')
        }else {
            console.log('Erro during record insertion :' + err)
        }
    })
}

router.get('/list', (req, res)=> {
    res.json('from List')
})
module.exports = router;