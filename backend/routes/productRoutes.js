import express from "express";
import {
  createProduct,
  createproductreview,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controlers/productControler.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);

router.route("/:id/reviews").post(protect, createproductreview);

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
