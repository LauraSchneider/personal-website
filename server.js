const express = require("express");
const app = express();
const hb = require("express-handlebars");

app.use(express.static(__dirname + "/public"));
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.get('/loretta', (req, res) => {
    res.render('loretta', {
        layout: 'main'
    });
});

app.get('/laura', (req, res) => {
    res.render('laura', {
        layout: 'main'
    });
});

app.get('/', (req, res) => {
    res.render('landing', {
        layout: 'main'
    });
});

app.listen(process.env.PORT || 8080, () => console.log("Listening"));
