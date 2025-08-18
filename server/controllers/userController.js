import User from "../models/User.js"



//Get user data
export const getUserData = async(req,res)=>{

    const userId = req.auth.userId

    try {
        const user = await User.findById(userId)
        if(!user){
            res.json({success:false,message:'User Does Not Exist'})
        }
        res.json({success:true,user})
    } catch (error) {
        res.json({success:false,message:error.message})
    }

}


//apply for job
export const applyForJob = async (req,res)=>{

}


//get user applied applications
export const getUserJobApplications = async (req,res) => {
    
}

//update user profile
export const updateUserResume = async (req,res) => {
    
}