import Inventory from "../models/inventory.js"
import Product from "../models/product.js"

export const getAllInventorys = async (req, res) => {
	try {
		const response = await Inventory.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error)
	}
}

export const getInventoryById = async (req,res)=>{
    try {
       const response = await Inventory.findOne({
            where : {
                id : req.params.id
            }
       }) 
       res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const createInventory = async (req,res)=>{
    try {
        await Inventory.create(req.body)
        res.status(201).json({
            msg : "Inventory Created"
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateInventory = async (req,res)=>{
    try {
        await Inventory.update(req.body,{
            where : {
                id : req.params.id
            }
        })
        res.status(200).json({
            msg : "Inventory Updated"
        }) 
    } catch (error) {
        console.log(error)
    }
}

export const deleteInventory = async (req, res) =>{
    try {
        const inventory = await Inventory.findByPk(req.params.id)
        if (!inventory) return res.status(404).json({
            msg : "Inventory Not Found"
        })

       const product = await Product.findAll ({
         where :{
            id : req.params.id
         }
       }) 

       if(product.length > 0) 
        return res.status(400).json({
            msg : "Inventory still used in product"
        })
       

        await Inventory.destroy({
            where : {
                id : req.params.id
            }
        })
        res.status(200).json({
            msg : " Inventory Deleted"
        })
    } catch (error) {
        console.log(error)
    }
}