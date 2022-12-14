var express = require("express");
var router = express.Router();

let users = { items: [] };

router.get("/", function (req, res, next) {
  res.render("items", {
    items: users.items,
  });
});

router.post("/", function (req, res, next) {
  users.items.push(req.body);
  res.redirect("/users");
  res.send("ITEM CRIADO");
});

router.delete("/", function (req, res, next) {
  if (users.items.length && req.body.name) {
    for (let i = 0; i < users?.items?.length; i++) {
      if (users?.items[i].name == req.body.name) {
        users?.items.splice(i, 1);
      }
    }
  } else {
    res.send(
      "ERRO, não existe o usuário que deseja deletar, ou não existem cadastros"
    );
  }
  res.send("ITEM DELETADO");
});

module.exports = router;
