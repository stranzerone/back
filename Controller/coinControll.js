import Wallet from "../Schemas/Walletschema.js";
import User from "../Schemas/Userschema.js";

 export const buy = async(req,res)=>{


const username = req.body.username;
const coin =req.body.coin;
const stocks = req.body.stocks;
const price = req.body.price;
const totalPrice = stocks *parseInt(price)
console.log(totalPrice,'totla cost');

console.log(req.body)


    try {
        // Find the wallet record based on username and coin
        const data = await Wallet.findOne({ username: username, coin: coin });
      
        if (data) {
          // If the record exists, update the stocks
          const stocks = parseInt(data.stocks);
          const total = stocks + parseInt(req.body.stocks);
      
          // Update the record and await the promise to complete
          const response = await Wallet.updateOne(
            { username: username, coin: coin },
            { stocks: total }
          );
      
        
        } else {
          // If the record doesn't exist, create a new one
          const walletUpdate = new Wallet({
            username: username,
            coin: coin,
            price:parseInt(req.body.price),
            stocks: parseInt(req.body.stocks),
            image:req.body.image
          });
      
          // Save the new record and await the promise to complete
          await walletUpdate.save();
        }
const userWallet = await User.findOne({username:username})
if(userWallet){
 const oldWallet = userWallet.wallet;
 const newWallet = oldWallet-totalPrice;

 await User.updateOne({wallet:newWallet});
}

       
      } catch (error) {
        // Handle any errors that occur during the database operations
        console.error("Error:", error);
      }
      


}


export const Portfolio = async(req,res)=>{
const username = req.body.username;

try{
 const response = await Wallet.find({username:username})

 res.send(response)

await Wallet.deleteOne({stocks:0})
}catch(error){
  console.error(error,"while while getting users data")
}


}










export const Remove = async(req,res)=>{
const username = req.body.username;
const coin = req.body.coin;
const stocks = req.body.stocks;
const cost = req.body.cost;



  try{
    const response = await Wallet.findOne({username:username,coin:coin})
    if(response){
      const remainStocks=response.stocks-stocks
    await  Wallet.updateOne({username:username,coin:coin},{stocks:remainStocks})
    }     
const user = await  User.findOne({username:username})
  if(user){
    const newWallet = user.wallet+cost;
      await User.updateOne({username:username},{wallet:newWallet})

  }else{
    console.log('user not found')
  }
    
  }catch(error){
    console.error(error,'error while update')
  }
}

 