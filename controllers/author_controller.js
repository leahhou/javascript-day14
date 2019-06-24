const AuthorModel = require("./../database/models/author_model");

//full CRUD for a resource: 7 functions (index, create, new, show, edit, update, delete)
async function create(req, res){
    let { name, bio, gender } = req.body;
    let author = await { name, bio, gender }; 
    AuthorModel.create(author)
    .then((author)=>{
        return res.redirect(`/authors/${author._id}`); 
    })  //.redirect is the route
    .cath((err)=>{
        return res.status(500).send(`Error:${err}`);
    })
}

async function index(req, res) {
    //showed a list of all the resources
    let authors = await AuthorModel.find(); //wait until the database find the resources;
    res.render("author/index", {authors}); //pass the the authors variable to views
}


function make(req, res) {
    //shows the form to create the resource
    res.render("author/new");
}

async function show(req, res) {
    let { id } = req.params; // get the id from request's params
    let author = await AuthorModel.findById(id); // finteh author by it's id from the database
    res.render("author/show", { author }); // respond with the show view, pass the autho variable to view
}

async function edit(req, res) {
    //show the edit form for user
    let { id } = req.params;
    const author = await AuthorModel.findById(id);
    res.render("author/edit", { author }); //.render is the view
}

async function update(req, res) {
    //update in the database
    let { id } = req.params;
    let { name, bio, gender } = req.body;

    await AuthorModel.findByIdAndUpdate(id, {name, bio, gender});
    res.redirect(`/authors/${id}`); //.redirect is the route
}

async function destroy(req, res) {
    let { id } = req.params;
    await AuthorModel.findByIdAndRemove(id);
    res.redirect("/authors"); //.redirect is the route
}


module.exports = {
    create,// create the new author in database
    index,// show all authors 
    make,// render form view for user to create new author
    show,// show individual author
    edit, // render form view for user to update individual author
    update, // update the author in database
    destroy // delete author in database
}
