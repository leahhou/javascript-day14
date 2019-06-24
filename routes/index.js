const express=require("express");

const authorRoutes=require("./author_routes");

const bookRouters=require("./book_routes")

const router=express.Router();


// router.use: 
    //This method on the router allows us to prepend a string to all of the routes
    // being referenced in this method. We can take advantage of this so that we can 
    //cleanup our author routes!
router.use("/authors", authorRoutes); // import full CRUD on all authorRoutes;
router.use("/books", bookRouters);

module.exports = router;