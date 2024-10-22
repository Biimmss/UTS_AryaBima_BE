import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomer,
  getCustomerById,
  updateCustomer,
} from "../controllers/CustomerController.js";
import {
  createSales,
  deleteSales,
  getAllSales,
  getAllSalesById,
  updateSales,
} from "../controllers/SalesController.js";
import {
  createStock,
  deleteStock,
  getAllStock,
  getAllStockById,
  updateStock,
} from "../controllers/StockController.js";
import {
  createPembayaran,
  deletePembayaran,
  getAllPembayaran,
  getPembayaranById,
  updatePembayaran,
} from "../controllers/PembayaranController.js";
import {
  createPegawai,
  deletePegawai,
  getAllPegawai,
  getPegawaiById,
  updatePegawai,
} from "../controllers/PegawaiController.js";
import {
  getAllAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  registerAdmin,
  loginAdmin,
} from "../controllers/AdminController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
const router = express.Router();

// Customer udah bener
router.get("/Customer", authenticateToken, getAllCustomer);
router.get("/Customer/:id", authenticateToken, getCustomerById);
router.post("/CreateCustomer", authenticateToken, createCustomer);
router.put("/UpdateCustomer/:id", authenticateToken, updateCustomer);
router.delete("/DeleteCustomer/:id", authenticateToken, deleteCustomer);

// Sales udah bener
router.get("/Sales", authenticateToken, getAllSales);
router.get("/Sales/:id", authenticateToken, getAllSalesById);
router.post("/CreateSales", authenticateToken, createSales);
router.put("/SalesUpdate/:id", authenticateToken, updateSales);
router.delete("/DeleteSales/:id", authenticateToken, deleteSales);

// Stock udah bener
router.get("/Stock", authenticateToken, getAllStock);
router.get("/Stock/:id", authenticateToken, getAllStockById);
router.post("/CreateStock", authenticateToken, createStock);
router.put("/StockUpdate/:id", authenticateToken, updateStock);
router.delete("/StockDelete/:id", authenticateToken, deleteStock);

// Pembayaran udah bener
router.get("/Pembayaran", authenticateToken, getAllPembayaran);
router.get("/Pembayaran/:id", authenticateToken, getPembayaranById);
router.post("/CreatePembayaran", authenticateToken, createPembayaran);
router.put("/UpdatePembayaran/:id", authenticateToken, updatePembayaran);
router.delete("/DeletePembayaran/:id", authenticateToken, deletePembayaran);

// Pegawai
router.get("/Pegawai", authenticateToken, getAllPegawai);
router.get("/Pegawai/:id", authenticateToken, getPegawaiById);
router.post("/CreatePegawai", authenticateToken, createPegawai);
router.put("/UpdatePegawai/:id", authenticateToken, updatePegawai);
router.delete("/DeletePegawai/:id", authenticateToken, deletePegawai);

// admin
router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

// Protect these routes with authentication middleware
router.get("/admin", authenticateToken, getAllAdmins);
router.get("/admin/:id", authenticateToken, getAdminById);
router.post("/admin", authenticateToken, createAdmin);
router.put("/admin/:id", authenticateToken, updateAdmin);
router.delete("/admin/:id", authenticateToken, deleteAdmin);

export default router;
