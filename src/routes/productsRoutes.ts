import express from "express";
import {
	getAllProducts,
	createProduct,
	getProduct,
	updateProduct,
} from "../controllers/productsController.js";

const productRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter.route("/:id").get(getProduct).patch(updateProduct);

export default productRouter;
