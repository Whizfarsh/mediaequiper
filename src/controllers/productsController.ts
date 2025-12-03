import Product from "../models/productModel.js";
import catchAsync from "../utils/catchAsync.js";
import { AppError } from "../utils/AppError.js";

export const getAllProducts = catchAsync(async (_req, res, _next) => {
	const products = await Product.find();

	res.status(200).json({
		status: "success",
		results: products.length,
		data: { products },
	});
});

export const createProduct = catchAsync(async (req, res, next) => {
	const product = await Product.create(req.body);

	if (!product) {
		return next(new AppError("All required products needs to be filled", 404));
	}

	res.status(201).json({
		status: "Success",
		data: { product },
	});
});

// ===
export const getProduct = catchAsync(async (req, res, next) => {
	const prodQuery = await Product.findById(req.params.id);
	const doc = prodQuery;

	if (!doc) {
		return next(
			new AppError(`Can't find a product with the ID ${req.params.id}`, 404)
		);
	}
	res.status(200).json({
		status: "Success",
		data: { doc },
	});
});

export const updateProduct = catchAsync(async (req, res, next) => {
	const updatedDOC = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidator: true,
	});

	if (!updatedDOC) {
		return next(new AppError("Unable to update this product", 400));
	}

	res.status(201).json({
		status: "Success",
		data: { updatedDOC },
	});
});
