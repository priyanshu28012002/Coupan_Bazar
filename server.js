const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS (replace with your chosen template engine)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next(); // Don't forget to call next() to pass control to the next middleware.
});

app.get('/', function (req, res) {
    res.render('index');
});

// Error handling middleware - handle 404 errors
app.use(function (req, res, next) {
    res.status(404).send('404 - Not Found');
});

// Error handling middleware - handle other errors
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('500 - Internal Server Error');
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});
