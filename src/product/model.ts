import mongoose from "mongoose";

export interface Product {
	name: string;
	description: string;
	price: number;
	ratings: number;
	images: {
		public_id: string;
		url: string;
	}[];
	category: string;
	stock: number;
	numOfReviews: {
		name: string;
		rating: number;
		comment: string;
	}[];
	createdAt: Date;
}

const productSchema = new mongoose.Schema<Product>({
	name: {
		type: String,
		required: [true, "Please enter product name"],
	},
	description: {
		type: String,
		required: [true, "Please enter product description"],
	},
	price: {
		type: Number,
		required: [true, "Please enter product price"],
		maxLength: [8, "Price cannot exceed 8 characters"],
	},
	ratings: {
		type: Number,
		default: 0,
	},
	images: [
		{
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
	],
	category: {
		type: String,
		required: [true, "Please enter product category"],
	},
	stock: {
		type: Number,
		required: [true, "Please enter product stock"],
		maxLength: [4, "Stock cannot exceed 4 characters"],
		default: 1,
	},
	numOfReviews: [
		{
			name: {
				type: String,
				required: true,
			},
			rating: {
				type: Number,
				required: true,
			},
			comment: {
				type: String,
				required: true,
			},
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Product = mongoose.model("Product", productSchema);

export default Product;
