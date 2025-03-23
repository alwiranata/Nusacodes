import Categorie from '../models/Categorie.js'; 

export const getCategory = async(req,res) =>{
    try {
        const response = await Categorie.findALL()
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const getCategoryById = async(req,res)=>{
    try {
        const response = await Categorie.findOne({
            where :{
                id: req.params.is
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const createCategory = async(req,res) =>{
    try {
       await Categorie.create(req.body)
        res.status(201).json({
           msg : "Category Created"
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateCategory =async (req,res) =>{
    try {
        await User.Categorie(req.body,{
            where : {
                id : req.params.id
            }
        })

        res.status(200).json({
            msg:"Category Updated"
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteCategory = async(req,res) =>{
    try {
        await Categorie.destroy({
            where : {
                id: req.params.id
            }
        })

        res.status(200).json({
            msg : "Category Deleted"
        })
    } catch (error) {
        console.log(error.message)
    }
}