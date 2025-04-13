import bcryptjs from "bcryptjs";
import User from "../models/user.model.js"; // Ensure User is imported
export const join= async (req, res) => {
    try {
        const{email,password,name} = req.body;
        if(!email || !password || !name){
          throw new Error("Please fill all the fields");
        }
        if(password.length < 6){
            return res.status(400).json({message:"Password must be at least 6 characters"});
        }
        const userAlreadyexists = await User.findOne({ email });
        if (userAlreadyexists) {
            return res.status(400).json({success:false ,message:"User already exists"});
        }
        const hashedpassword = await bcryptjs.hash(password, 10);
        
        
    } catch (error) {
        console.log(error);
         return res.status(400).json({success:false ,message:error.message});
        
    }
    res.send("Joining...");
}
export const access  = async (req, res) => {
    res.send("Accessing...");
    console.log("Accessing...");
}
export const exit = async (req, res) => {
    res.send("Exiting...");
}
