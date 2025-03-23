import express from 'express';

import{
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from '../controllers/Categorie.js';

const Categoriy = express.Router()

Categoriy.get('/categories',getCategory)
Categoriy.get('/categorie/:id',getCategoryById)
Categoriy.post('/categories',createCategory)
Categoriy.put('/categorie/:id',updateCategory)
Categoriy.delete('/categorie/:id',deleteCategory)

export default Categoriy