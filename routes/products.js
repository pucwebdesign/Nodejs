import express from "express";
const router = express.Router();
import { ProductsService } from "../services/Products.js";
import { CommentService } from "../services/Comment.js";

/* GET home page. */
router.get("/", function (_, res) {
	ProductsService.findAll().then(function (products) {
		res.render("index", { products });
	});
});

router.get("/:id", function (req, res) {
	const { id } = req.params;

	const promiseProducts = ProductsService.getById(id).then((products) => {
		return products;
	});

	const promiseComment = CommentService.getById(id).then((comments) => {
		return comments;
	});

	Promise.all([promiseProducts, promiseComment]).then((values) => {
		const products = values[0];
		const comments = values[1];
		let average = 0;

		//Adicionar media
		for (let i = 0; i < comments.length; i++) {
			average += comments[i].score;
		}

		average = (average / comments.length).toFixed(2);

		res.render("productDetail", { products, comments, average, id });
	});
});

router.delete("/:id", function (req, res) {
	const { id } = req.params;
	ProductsService.delete(id).then(() => {
		res.json({
			success: "Produto removido com sucesso!",
		});
	});
});

router.post("/", function (req, res) {
	const { body } = req;
	ProductsService.insert(body).then((product) => {
		res.json(product);
	});
});

router.put("/", function (req, res) {
	const { body } = req;
	ProductsService.update(body).then((product) => {
		res.json(product);
	});
});

export default router;
