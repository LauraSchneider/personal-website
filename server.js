const express = require("express");
const app = express();
const hb = require("express-handlebars");
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const apiKey = require('./secrets.json').API_Key;
sgMail.setApiKey(apiKey);

app.use(express.static(__dirname + "/public"));
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));

app.get('/loretta', (req, res) => {
    res.render('loretta', {layout: 'main'});
});

app.get('/laura', (req, res) => {
    res.render('laura', {layout: 'main'});
});

app.get('/', (req, res) => {
    res.render('landing', {layout: 'main'});
});

app.post('/send-form', (req, res) => {
    if (!req.body.name || !req.body.subject || !req.body.comments || !req.body.senderEmail) {
        res.render('landing', {
            layout: 'main',
            error: 'Please fill out all fields.'
        });
    } else {
        console.log('hello');
        const msg = {
            to: 'laurie.schneider@gmail.com',
            from: req.body.senderEmail,
            subject: req.body.subject,
            html:
            `
            Name: ${req.body.name}<br>
            `
        };
        sgMail.send(msg).then(results => {
            res.json({success: true});
        })
    }
})


app.listen(process.env.PORT || 8080, () => console.log("Listening"));
