import { db } from "../connection/db.js";

export const TABLE_NAME = "comments";
export const CommentService = {
	getById(product_id) {
		return db(TABLE_NAME).select("*").where("product_id", product_id);
	},
	findAll() {
		return db(TABLE_NAME).select("*");
	},
	insert(comment) {
		return db(TABLE_NAME).insert(comment);
	},
	delete(id) {
		return db(TABLE_NAME).where("id", id).del();
	},
	update(product) {
		return db(TABLE_NAME).where("id", product.id).update({
			name: product.name,
			description: product.description,
			price: product.price,
		});
	},
};
