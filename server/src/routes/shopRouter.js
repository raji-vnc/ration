const express = require('express')
const shopRouter = express.Router()
const bcrypt = require('bcryptjs')
const userRegister = require('../models/userData')
const rationRegister = require('../models/rationShopData')
const login = require('../models/loginData')
const checkAuth=require("../middleware/check-auth");
var ObjectId = require('mongodb').ObjectID;


shopRouter.get('/view-shop', (req, res) => {
    
    login.aggregate([
        {
          $lookup:
          {
            from:'ration_shop_tbs',
            localField:'_id',
            foreignField:'login_id',
                     
            as:"registerdetails"
          }
        },
        {
            $match:
            {
                role:"1"
            }
        }
       
    ]).then(function(data){
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

shopRouter.get('/user-view-shop/:id', (req, res) => {
    const id=req.params.id
    console.log(id);
    login.aggregate([
        {
          $lookup:
          {
            from:'ration_shop_tbs',
            localField:'_id',
            foreignField:'login_id',
                     
            as:"shopedetails"
          }
        },
        {
            $match:
            {
                _id:ObjectId(id)
            }
        }
       
    ])
    .then(function(data){
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

shopRouter.delete('/delete-shop/:id', (req, res) => {
    const id = req.params.id   // login id 
    login.deleteOne({ _id: id }) .then(function () {
        rationRegister.deleteOne({ login_id: id })
            .then(function () {
                res.status(200).json({
                    success: true,
                    error: false,
                    message: 'Shop deleted!'
                })
            })
        })
            .catch(err => {
                return res.status(401).json({
                    message: "Something went Wrong!"
                })
            })
})



module.exports = shopRouter