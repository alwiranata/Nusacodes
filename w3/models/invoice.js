import db from "../config/database.js";
import { DataTypes } from "sequelize";
import { v4 as uuidv4 } from "uuid";

const Invoice = db.define("Invoice", {
    id_invoice: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    items: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("items"));
      },
      set(value) {
        this.setDataValue("items", JSON.stringify(value));
      }
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "paid"),
      defaultValue: "pending",
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  
export default Invoice;