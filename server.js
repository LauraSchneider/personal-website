const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));



app.listen(process.env.PORT || 8080, () => console.log("Listening"));
