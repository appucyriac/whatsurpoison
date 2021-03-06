const path = require('path');
const axios = require('axios');
const express = require('express');
const template = require('./ssr/index.template');
const app = express();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM('');
const { document } = (new JSDOM(``)).window;
global.$ = require('jquery')(window);
app.use('/bundle.js', express.static(path.join(__dirname, 'build', 'bundle.js')));

app.get('/', function (req, res) {
    axios.post('http://localhost:8080/batch', {
        "mysheep": {
            "name": "Home",
            "data": {}
        }
    }).then(response => {
        let mysheep = response.data.results.mysheep.html;
        const renderedMarkup = template(mysheep);       
        res.send(renderedMarkup);

    });
});

app.listen(8081, () => {
    console.log("Server listening on port 8081!");
});