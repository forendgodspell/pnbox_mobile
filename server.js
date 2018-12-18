console.log('Server code running...');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('listening on 8080');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    res.render("index", { name: "example" });
});