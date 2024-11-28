const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Raji:raji199712@cluster0.oywjgl0.mongodb.net/?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema    //schema definition

const kitSchema = new Schema({
    kit_name:{ type: String, required: true },
     kit_items:{ type: Array, required: true },
   
})

var kitdata = mongoose.model('kit_tb',kitSchema) //model creation
module.exports=kitdata;