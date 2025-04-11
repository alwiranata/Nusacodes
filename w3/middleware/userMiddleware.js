import jwt from "jsonwebtoken";

export const verifyToken = (req,res ,next) =>{
    const authHeader = req.headers.authorization
    const token = authHeader?.split(" ")[1]

    if(!token) return res.status.status(401).json({
        msg : "No token provided"
    })

    jwt.verify(token, "rahasiaSuperAman", (err ,user) =>{
        if(err) return res.status(403).json({
            msg :"Token Invalid"
        })

        req.user = user
        next()
    })
}

export const userOnly = (req,res,next) =>{
    if(req.user.role !=="user"){
        return res.status(403).json({
            msg :"User Access Only"
        })
    }
    next()
} 