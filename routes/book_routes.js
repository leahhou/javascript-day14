const express=require("express");
const AuthorController=require("./../controllers/author_controller");
const BookController=require("./../controllers/book_controller")
const router=express.Router();

// 8 routes in total for full CRUD;
router.get("/", BookController.index);

router.post("/", BookController.create);

router.get("/new", BookController.make);

router.get("/:id", BookController.show);

router.put("/:id", BookController.update);

router.patch("/:id", BookController.update);

router.get("/:id/edit", BookController.edit);

router.delete("/:id", BookController.destroy);

module.exports = router;