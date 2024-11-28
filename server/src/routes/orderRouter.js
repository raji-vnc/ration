const express = require('express');
const orderRouter = express.Router();
const cart=require("../models/cartData")
const order = require('../models/orderData')
const checkAuth=require("../middleware/check-auth");
var ObjectId = require('mongodb').ObjectID;


orderRouter.post('/ordersubsidy',checkAuth,(req, res)=>{
    const id=req.userData.userId
   console.log("shop_id===>",req.body.shop_id);
   console.log("userId===>",id);
   cart.find({login_id:req.userData.userId})
   .then(result=>{
    let cartdata=result
    console.log(cartdata);
    cart.deleteMany({login_id:req.userData.userId})
    .then(data=>{
        var paymentstatus;
        if(req.body.paymentstatus){
            paymentstatus="Not Paid"
        }else{
             paymentstatus="paid"
        }
        console.log(data);
           var item={
            login_id:req.userData.userId,
            shop_id:req.body.shop_id,
            subsidydata:cartdata,
            date : new Date().toDateString(),
            month : new Date().getMonth(),
            orderstatus:"ordered",
            paymentstatus:paymentstatus,
            total:req.body.total

        }
        console.log(item);
        var subsidy=order(item);
        subsidy.save().then(()=>{
            res.status(200).json({
                success:true,
                error:false,
                message:'Ordered!'
            })
        })
    })
   })

})

orderRouter.get('/viewOrderItems',checkAuth, (req, res) => {
    var id=req.userData.userId;
    order.find({login_id:ObjectId(req.userData.userId)})
        .then(function (data) {
            console.log(data);
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Item Found!"
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

orderRouter.get('/shope-view-order-data/:id', (req, res) => {
    var id=req.params.id;
    console.log("id=>",id);
    order.aggregate([
        {
          $lookup:
          {
            from:'user_tbs',
            localField:'login_id',
            foreignField:'login_id',
                     
            as:"registerdetails"
          }
        }, {
            $unwind:'$registerdetails'
        },
        {
            $match:
            {
                shop_id:ObjectId(id)
            }
        }
       
    ])
        .then(function (data) {
            console.log(data);
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Item Found!"
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

orderRouter.get('/admin-view-order-data', (req, res) => {
    
    order.aggregate([
        {
          $lookup:
          {
            from:'user_tbs',
            localField:'login_id',
            foreignField:'login_id',
                     
            as:"registerdetails"
          }
        }, {
            $unwind:'$registerdetails'
        },
       
       
    ])
        .then(function (data) {
            console.log(data);
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Item Found!"
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
module.exports = orderRouter