const express=require("express");

const AuthorController=require("./../controllers/author_controller");

const router=express.Router();




router.get("/", AuthorController.index);

router.post("/", AuthorController.create);

router.get("/new", AuthorController.make);

router.get("/:id", AuthorController.show);

router.delete("/:id", AuthorController.destroy);

router.put("/:id", AuthorController.update);

router.patch("/:id", AuthorController.update);

router.get("/:id/edit", AuthorController.edit);

module.exports = router;