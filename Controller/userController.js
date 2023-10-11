import User from "../Schemas/Userschema.js"

 export const Regi = async(req,res)=>{

    const exist = await User.findOne({username:req.body.username});
    if(exist){
    
        console.log('does not exist');
        res.status(201).send('user exist')
    }else{
    
     
    
        const newuser = new User(req.body)
       await newuser.save();
       console.log("newUser added")
       res.status(200).send("user added");
    
    

}

 }




 
export const logi =  async (req,res)=>{
    try{

     const username= req.body.username;
     const password = req.body.password;

     console.log(req.body,"this is it");

    const response = await User.findOne({username:username,password:password})
 
    if (response) {
       
        console.log(response,'hhhh');
        res.status(200).send(response);
        console.log('user loged in')
    } else {
        console.log('no found')
        res.status(201).send("User not found");
    }
    

    }catch(error){
        console.log(error);
        res.status(500).send(error.message);

    }

    
}



export const wallet=async(req,res)=>{
    const username = req.body.username
    try{
    const    response = await User.findOne({username:username})
        if(response){
            console.log(response.wallet);
            const wall = response.wallet
          res.send({wall})
        }
    }catch(error){
        console.error(error,"error while wallet data")
    }

}