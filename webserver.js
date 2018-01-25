const path = require('path');
const axios = require('axios');
const express = require('express');
const template = require('./ssr/index.template');
const app = express();
app.use('/bundle.js', express.static(path.join(__dirname, 'build', 'bundle.js')));

app.get('/', function (req, res) {
    axios.post('http://localhost:8080/batch', {
        "homeComponent": {
            "name": "Home",
            "data": {}
        }
    }).then(response => {
        let homeComponent = response.data.results.homeComponent.html;
        const renderedMarkup = template(homeComponent);       
        res.send(renderedMarkup);

    });
});
    app.get('/login', function (req, res) {
    axios.post('http://localhost:8080/batch', {
        "loginComponent": {
            "name": "Login",
            "data": {}
        }
    }).then(response => {
        let loginComponent = response.data.results.loginComponent.html;
        const renderedMarkup = template(loginComponent);       
        res.send(renderedMarkup);

    });
});
    app.get('/browse', function (req, res) {
    axios.post('http://localhost:8080/batch', {
        "browseComponent": {
            "name": "Browse",
            "data": {}
        }
    }).then(response => {
        let browseComponent = response.data.results.browseComponent.html;
        const renderedMarkup = template(browseComponent);       
        res.send(renderedMarkup);

    });
});

app.listen(8081, () => {
    console.log("Server listening on port 8081!");
});