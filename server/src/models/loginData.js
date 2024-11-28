const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Raji:raji199712@cluster0.oywjgl0.mongodb.net/?retryWrites=true&w=majority') 
const Schema = mongoose.Schema    

const LoginSchema = new Schema({
     username: String,
     password: String,
     role: String,
     status: String,
    
})

var Logindata = mongoose.model('login_tb',LoginSchema) 
module.exports=Logindata;