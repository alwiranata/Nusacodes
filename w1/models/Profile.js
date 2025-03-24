import db from "../config/Database.js";
import  {DataTypes} from "sequelize";

const Profile = db.define("profile", {
    name:DataTypes.STRING,
    pekerjaan:DataTypes.STRING,
    lulusan:DataTypes.STRING,
},{
    frezeeTableName : true,
    timestamps: false
})

export default Profile;

(async () => {
    await db.sync()
});