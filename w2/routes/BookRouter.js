import express from "express"
import {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} from "../controllers/Book.js"

const BookRouter = express.Router()

BookRouter.get("/",getAllBooks)
BookRouter.get("/:id",getBookById)
BookRouter.post("/",createBook)
BookRouter.put("/:id",updateBook)
BookRouter.delete("/:id",deleteBook)

export default BookRouter