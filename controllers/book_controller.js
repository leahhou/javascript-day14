const BookModel = require("./../database/models/book_model");

async function index(req, res) {
    //show all books (server get to user)
    let books = await BookModel.find(); //.find find the full documents
    res.render("/book/index", {books}); // {books} exports the variable books to index view, that the view have full database of books
}

async function create(req, res) {
    //create a book(user post to server)
    let {name, author} = req.body;
    let book = await (name, author);
    BookModel.create(book)
    .then((book)=>{
        return res.redirect(`/books/${book._id}`) //.redirect is the route
    })
    .catch((err)=>{
        return res.status(500).send(`Error:${err}`);
    })

}

async function make(req, res) {
    //render new book form (server get to user)
    res.render("/book/new");
}

async function show(req, res) {
    //show individual book(server get to user)
    let { id } = await req.params;
    let book = await BookModel.findById(id);
    res.render("book/show", { book }); // {book} exports the variable books to show view, that the view have full database of individual book
} // use .render instead of redirect because we need to save the book variable for the view to use



async function update(req, res) {
    //update a book (user put/patch to server)
    let { id } = req.params;
    let {name, author} =  req.body;
    let book = await {name, author};
    BookModel.findByIdAndUpdate(id, book)
    .then((book)=>{
        return res.redirect(`/books/${id}`);
    })
    .catch((err)=>{
        return res.status(500).send(`Error:${err}`);
    })
}

async function edit(req, res) {
    //render edit book from (server get to user)
    let { id } = await req.params;
     let book = await BookModel.findById(id);
    res.render("/book/edit", { book }); // use .render instead of redirect because we need to save the book variable for the view to use
}

async function destroy(req, res) {
    //delete a book (user delete to server)
    let { id } = await req.params;
    BookModel.findByIdAndDelete(id);
     res.redirect("/books");
}

module.exports = {
    index,
    create,
    make,
    show,
    update,
    edit,
    destroy
}
