import  Category from "../models/Category.js"

export const getAllCategories = async (req,res) =>{
    try {
        const response = await Category.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const getCategoryById = async (req,res) =>{
    try {
        const response = await Category.findOne({
            where : {
                id :req.params.id
            }
        })
        res.status(200).json(response)
    }catch(error){
        console.log(error)
    }
}

export const createCategory = async (req,res) =>{
    try {
        await Category.create(req.body)
        res.status(201).json({
            msg : "Category Created"
        })
    }catch(error){
        console.log(error)
    }
}

export const updateCategory = async (req,res) =>{
    try {
        await Category.update(req.body,{
            where : {
                id : req.params.id
            }
        })
        res.status(200).json({
            msg : "Category Updated"
        })
    } catch (error) {
       console.log(error) 
    }
}

export const deleteCategory = async (req,res) =>{
    try {
        await Category.destroy({
            where : {
                id: req.params.id
            }
        })
        res.status(200).json({
            msg : "Category Deleted"
        })
    } catch (error) {
        console.log(error)  
    }
}




