const books = [];
const id = 0;
const title = '';
const author = '';

const read = (req, res, next) => {
    res.status(200).send(books)
}

const create = (req, res, next) => {
    let book = {
        id: id,
        title: title,
        author: author
    }
    books.push(book)
    id++; 
}

const update = (req, res, next) => {
    const book = book.find(book => book.id === +req.params.id);
    
}

module.exports({
    read: read,
    create: create,
    update: update
})

