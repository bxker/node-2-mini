const express = require('express');
const app = express();
const PORT = 4000;

//controllers
const books_controller = require('./controllers/books_controller')

app.use(express.json(), next());

app.get('/api/books', books_controller.read)
app.post('/api/books', books_controller.create)
app.put('/api/books/:id', books_controller.update)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))