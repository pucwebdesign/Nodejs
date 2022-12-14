import express from "express";
const router = express.Router();
import { CommentService } from "../services/Comment.js";

router.post("/", function (req, res) {
	const { body } = req;
	CommentService.insert(body).then((comment) => {
		res.redirect(`/products/${body.product_id}`);
	});
});

export default router;
