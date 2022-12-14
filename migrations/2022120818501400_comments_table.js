export const up = function (knex) {
	return knex.schema.createTable("comments", (column) => {
		column.increments("id").primary();
		column.string("author_name");
		column.string("description");
		column.integer("product_id").references("id").inTable("products");
		column.double("score");
		column.timestamps(false, true);
	});
};

export const down = function (knex) {
	return knex.schema.dropTableIfExists("comments");
};
