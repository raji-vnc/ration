const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Raji:raji199712@cluster0.oywjgl0.mongodb.net/?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema    //schema definition

const subsidySchema = new Schema({
    card_type:{ type: String, required: true },
     card_items:{ type: Array, required: true },
   
})

var subsidydata = mongoose.model('subsidy_tb',subsidySchema) //model creation
module.exports=subsidydata;