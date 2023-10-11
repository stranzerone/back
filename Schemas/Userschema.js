import mongoose from "mongoose";

const user = new mongoose.Schema({

name:{
    required:true,
    min:2,
    max:10,
    type:String,
    trim:true
},
username:{
    required:true,
   unique:true,
    type:String,
    trim:true,
 
},
email:{
    required:true,
    
    type:String,
    trim:true,
    lowercase:true,
},
password:{
    required:true,
    min:4,
    max:20,
    type:String,
   
   
},
wallet:{
    
    required:true,
    type:Number
}

}
)
const User = mongoose.model("User", user);


export default User;
