import express from "express"
import {
    getProfile,
    getProfileById,
    createProfile,
    updateProfile,
    deleteProfile

} from "../controllers/Profile.js"

const profile = express.Router()

profile.get("/",getProfile)
profile.get("/:id",getProfileById)
profile.post("/",createProfile)
profile.put("/:id",updateProfile)
profile.delete("/:id",deleteProfile)

export default profile
