import mongoose from "mongoose"

const wallet = new mongoose.Schema({
    
    username:{
      type:String,
      required:false
    },
    coin:{
      type:String,
      required:false
    },
  
    stocks:{
      type:Number,
      required:false
    },
 
    price:{
      type:Number,
      required:true
    },
    image:{
      type:String,
     
    }
   
  
    
    })

    
    const Wallet = mongoose.model('wallet',wallet)
    
    export default Wallet