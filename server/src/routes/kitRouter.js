const express = require('express')
const kitRouter = express.Router()
const bcrypt = require('bcryptjs')
const kit = require('../models/kitData')



kitRouter.post('/add-kit', (req, res) => {
    console.log("kit====",req.body.kitDetails)
    var item={
        kit_name:req.body.kit,
        kit_items:req.body.kitDetails
    }
    kit.findOne({ kit_name: req.body.kit })
    .then(username => {
        if (username) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'kit already exist!'
            })
        }else{
            var messageitem = kit(item)
            messageitem.save()
            .then(()=>{
                res.status(200).json({
                    success:true,
                    error: false,
                    message:'kit added'
                })
            })
        }
    })
    

})

kitRouter.get('/view-kit', (req, res) => {
   
   kit.find()
   .then((data)=>{
    res.status(200).json({
        success:true,
        error: false,
        data:data
    })
})
.catch(err=>{
     return res.status(401).json({
         message: "something wrong"
     })
 })

}) 

kitRouter.delete('/delete-kit/:id', (req, res) => {
    const id = req.params.id   // login id 
   
        kit.deleteOne({ _id: id })
        .then(function () {
            res.status(200).json({
                success: true,
                error: false,
                message: 'kit deleted!'
            })
        })

        .catch(err => {
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
})

module.exports = kitRouter