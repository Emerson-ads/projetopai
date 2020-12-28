const express = require ('express')

let router = express.Router()

router.get('/', (req,res)=>{
    res.render('employee/addOrEdit.hbs', {
        viewTitle: "Devedor"
    })
});

router.post('/', (req, res)=>{
    console.log(req.body)
})
module.exports = router;