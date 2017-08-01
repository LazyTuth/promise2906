const express = require('express');
const queryDB = require('./db')

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    queryDB('Select * from "Product"', []).then((x) => res.send(x.rows));
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));
