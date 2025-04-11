import express from "express";
import { register, login, logout } from "../controllers/admin.js";

const admin = express.Router();

admin.post("/register", register);
admin.post("/login", login);
admin.post("/logout", logout);

export default admin;

