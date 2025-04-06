import  Category from "../models/Category.js"
import Book from "../models/Book.js"

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
     const category = await Category.findByPk(req.params.id);
     if (!category) return res.status(404).json({ message: "Category not found" });

     // 🔹 Cek apakah ada buku yang masih menggunakan kategori ini
     const books = await Book.findAll({ 
        where: {
            category_id: req.params.id 
        } 
    });

     if (books.length > 0) {
      return res.status(400).json({
        message: "Cannot delete category. Please delete all books associated with this category first."
      });
     }

     // 🔹 Hapus kategori jika tidak ada buku terkait
     await Category.destroy({ where: { id: req.params.id } });

     res.json({ message: "Category deleted successfully." });
    } catch (error) {
        console.log(error)  
    }
}




