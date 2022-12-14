export const up = function (knex, Promise) {
	return knex.schema.createTable("products", (table) => {
		table.increments("id").primary();
		table.string("name");
		table.string("description");
		table.decimal("price");
		table.timestamps(false, true);
	});
};

export const down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("products");
};
