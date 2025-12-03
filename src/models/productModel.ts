import mongoose, { Schema, model, Document } from "mongoose";

interface Product extends Document {
	name: string;
	description: string;
	category: string;
	price: number;
	images: string[];
	stock: number;
	Rating: number;
	numReviews: number;
	createdBy: mongoose.Types.ObjectId;
}

const productSchema = new Schema<Product>({
	name: {
		type: String,
		required: [true, "Producy name must be added"],
		unique: true,
		minlength: 5,
	},
	description: {
		type: String,
		required: true,
	},
	category: String,
	price: {
		type: Number,
		required: [true, "Add product price"],
	},
	images: [],
	stock: Number,
	Rating: {
		type: Number,
		default: 0,
		min: 1,
		max: 5,
	},
	numReviews: Number,
	createdBy: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
	},
});

const ProductModel = model<Product>("Product", productSchema);

export default ProductModel;
