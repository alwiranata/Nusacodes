import Book from "../models/Book.js"

export const getAllBooks = async (req,res) =>{
    try {
        const response = await Book.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const getBookById = async (req,res) =>{
    try {
        const response = await Book.findOne({
            where: { 
                id: req.params.id
            }  
        });
        res.status(200).json(response)
    }catch(error){
        console.log(error)
    }
}

export const createBook = async (req,res) =>{
    try {
        await Book.create(req.body)
        res.status(201).json({
            msg : "Book Created"
        })
    }catch(error){
        console.log(error)
    }
}

export const updateBook = async (req,res) =>{
    try {
        await Book.update(req.body,{
            where : {
                id : req.params.id
            }
        })
        res.status(200).json({
            msg : "Book Updated"
        })
    } catch (error) {
       console.log(error) 
    }
}

export const deleteBook = async (req,res) =>{
    try {
        await Book.destroy({
            where : {
                id: req.params.id
            }
        })
        res.status(200).json({
            msg : "Book Deleted"
        })
    } catch (error) {
        console.log(error)  
    } 
}




