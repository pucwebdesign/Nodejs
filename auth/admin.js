import { Router } from "express";
import { isLoggedIn } from "./helpers.js";

export const adminRouter = Router();

adminRouter.get("/", isLoggedIn, function (req, res) {
    res.render("admin", { user: req.session.passport.user });
});
