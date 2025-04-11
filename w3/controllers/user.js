import User from "../models/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async(req,res) =>{
    try {
        const {name , email ,password ,phone ,role  } = req.body
        const existingUser = await User.findOne({
            where :{
                email : email
            }
        })

        if(existingUser){
            return res.status(400).json({
                msg : "User Already Exists"
            })
        }
        
        const hashPassword = await bcrypt.hash(password,10)

        await User.create({
            name,
            email,
            password : hashPassword,
            phone,
            role : role || "user"
        })
        

        res.status(201).json({
            msg :"User Registered Successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

export const login = async (req,res) =>{
    try {
        const {email ,password} = req.body
        const user = await User.findOne({
            where : {email}
        })

        if(!user || user.role !== "user"){
            return res.status(400).json({
                msg : "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(401).json({
                msg : "Invailid Credentials"
            })
        }

        const token = jwt.sign({
            id : user.id,
            email: user.email, 
            role : user.role,
        },
        "rahasiaSuperUser",
        {
            expiresIn : "1d"
        }) 
        res.status(200).json({
            msg : "Login Successfuly",
            token
        })
    } catch (error) {
        console.log(error)
    }
}

export const logout = async (req,res) =>{
    try {
        res.status(200).json({
            msg : "Logout Successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

