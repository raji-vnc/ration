const express = require('express')
const volunteerRouter = express.Router()
const bcrypt = require('bcryptjs')
const order=require('../models/orderData')
const volunteer = require('../models/volunteerData')
const login = require('../models/loginData')
const rationshop=require('../models/rationShopData')
const checkAuth=require("../middleware/check-auth");
var ObjectId = require('mongodb').ObjectID;

volunteerRouter.get('/view-volunteer', (req, res) => {
    volunteer.aggregate(
        [{
            $lookup: {
                from: 'login_tbs',
                localField: 'login_id',
                foreignField: '_id',
                as: 'userdata'
            }
        },
        {
            $unwind:'$userdata'
        }, {
            $lookup: {
                from: 'login_tbs',
                localField: 'shop_id',
                foreignField: '_id',
                as: 'shopdata'
            }
        },
        {
            $unwind:'$shopdata'
        },
    
    ]).then(function (data) {
        console.log(data);
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Data Found!"
                })
            }
            else {
                return res.status(200).json({
                    success: true,
                    error: false,
                    data: data
                })
            }
        })

})

volunteerRouter.delete('/delete-volunteer/:id', (req, res) => {
    const id = req.params.id   // login id 
    login.deleteOne({ _id: id }) .then(function () {
    volunteer.deleteOne({ login_id: id })
        .then(function () {
            res.status(200).json({
                success: true,
                error: false,
                message: 'volunteer deleted!'
            })
        })
    })
        .catch(err => {
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
    
})

volunteerRouter.get("/view-volunteer-Request",checkAuth,((req,res)=>{
    let id=req.userData.userId
    volunteer.aggregate(
        [{
            $lookup: {
                from: 'login_tbs',
                localField: 'login_id',
                foreignField: '_id',
                as: 'userdata'
            }
        },
        {
            $unwind:'$userdata'
        }, {
            $lookup: {
                from: 'login_tbs',
                localField: 'shop_id',
                foreignField: '_id',
                as: 'shopdata'
            }
        },
        {
            $unwind:'$shopdata'
        },
    {
        $match:{
            shop_id:ObjectId(id)
        }
    }
]
    ).then(function(data){
        console.log("dataaaa",data);   
   res.status(200).json({
       success:true,
       error:false,
       data:data
   })
}) 
 }))


volunteerRouter.get('/view-volunteer-profile/:id', (req, res) => {
    const id= req.params.id
    volunteer.find({login_id:id}).then(function (data) {
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Data Found!"
                })
            }
            else {
                return res.status(200).json({
                    success: true,
                    error: false,
                    data: data
                })
            }
        }).catch((err) => {
            return res.status(401).json({
                success: false,
                error: true,
                message: err
            })
        })

})

volunteerRouter.get('/view-order-items/:id',checkAuth,((req, res) => {
    let id=req.params.id;
    console.log(id);
    order.aggregate([
        {
            $lookup:{
                from: 'user_tbs',
                localField: 'login_id',
                foreignField: 'login_id',
                as: 'userdata'
              }
         },
         {
            $match:{
                shop_id:ObjectId(id)
            }
         }
    ])
    
.then(function (data) {
    if (data == 0) {
        return res.status(401).json({
            success: false,
            error: true,
            message: "No Item Found!"
        })
    }
    else {
        console.log(data);
        return res.status(200).json({
            success: true,
            error: false,
            data: data
        })
    }
})

}))

volunteerRouter.post('/delivered/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    order.updateOne(  { _id:id} , { $set: { orderstatus : "delivered"  } } ).then((user)=>{
        console.log(user);
        res.status(200).json({
            success:true,
            error:false,
            message:"Delivered"
        })
        
    }).catch(err => {
        return res.status(401).json({
            message: "Something went Wrong!"
        })
    })
 
})
module.exports = volunteerRouter