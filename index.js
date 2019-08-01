var express = require("express");
const bodyParser = require('body-parser');
 
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.send("Hello Jenkins");
});

app.post('/suma', (request, res) => {
    num1 = request.body.num1;
    num2 = request.body.num2;
    suma = Number(num1) + Number(num2);

    res.send({ resultado: suma });
});

app.listen(process.env.PORT || 3000);
 
module.exports = app;