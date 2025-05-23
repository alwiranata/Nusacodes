import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

import db from "./config/database.js";
import admin from './routes/admin.js';
import user from './routes/user.js';
import inventoryRouter from './routes/inventory.js';
import productRouter from './routes/product.js';
import cartRouter from './routes/cart.js';
import invoiceRouter from './routes/invoice.js';

dotenv.config(); // untuk .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Tes koneksi database
try {
  await db.authenticate();
  console.log("✅ Database Connected");
} catch (error) {
  console.error("❌ Database connection failed:", error);
}

// Routes
app.use("/admin", admin); // Register, Login, Logout
app.use("/inventory", inventoryRouter); // hanya bisa diakses oleh admin
app.use("/product", productRouter); // hanya bisa diakses oleh admin
app.use("/user", user)
app.use("/cart", cartRouter);
app.use("/invoice", invoiceRouter);


// Test endpoint
app.get("/", (req, res) => {
  res.send("✅ API Running - Inventory App");
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
