import express from 'express';
import { register ,login ,logout } from '../controllers/user.js';

const user = express.Router();

user.post("/register", register)
user.post("/login" ,login)
user.post("/logout",logout)

export default user