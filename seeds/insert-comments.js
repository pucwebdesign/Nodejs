export const seed = async function (knex) {
	await knex("comments").del();
	await knex("comments").insert([
		{
			author_name: "Julin",
			description: "muito bom",
			product_id: 2,
			score: 4,
		},
		{
			author_name: "Astolfo",
			description: "muito ruim",
			product_id: 1,
			score: 4,
		},
		{
			author_name: "Jackson",
			description: "chato",
			product_id: 3,
			score: 0,
		},
		{
			author_name: "Jeraldo",
			description: "Não gostei do produto mucho ruim",
			product_id: 1,
			score: 3,
		},
		{
			author_name: "JeraldoOff",
			description: "Não gostei do produto mucho ruim 2",
			product_id: 1,
			score: 1,
		},
	]);
};
