const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Raji:raji199712@cluster0.oywjgl0.mongodb.net/?retryWrites=true&w=majority') 
const Schema = mongoose.Schema    //schema definition

const orderSchema = new Schema({
    login_id:{type:Schema.Types.ObjectId,ref:"login_tb"} ,
    shop_id:{type:Schema.Types.ObjectId,ref:"ration_shop_tb"} ,
    subsidydata:{type:Array,required: true},
    date:{ type: String, required: true },
    month:{ type: Number, required: true },
    orderstatus:{ type: String, required: true },
    paymentstatus:{type:String,required: true},
    total:{type:String,required: true},
})

var orderdata = mongoose.model('order_tb',orderSchema) //model creation
module.exports=orderdata;