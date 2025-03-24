import Profile from "../models/Profile.js"

export const  getProfile =async (req,res) =>{
    try {
        const response = await Profile.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const getProfileById = async (req,res) =>{
    try {
        const response = await Profile.findOne({
            where :{
                id : req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const createProfile = async (req,res) =>{
    try{
        await Profile.create(req.body)
        res.status(201).json({
            msg :"Profile Created"
        })
    }catch(error){
        console.log(error)
    }
}

export const updateProfile = async (req,res) =>{
    try {
        await Profile.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            msg : "Profile Updated"
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteProfile = async(req,res) =>{
    try {
        await Profile.destroy({
            where:{
               id : req.params.id
            }
        })
        res.status(200).json({
            msg : "Profile Deleted"
        })
    } catch (error) {
        console.log(error)
            
        
    }
}