const hydrate = require("react-dom");
const ServerStyleSheet= require('styled-components');
const React = require('react');
const path = require('path');
const axios = require('axios');
const express = require('express');
const template = require('./ssr/index.template');
const app = express();

//const bodyParser = require('body-parser');
//const passport = require('passport');
//const config = require('./src/config');
//require('./src/models').connect(config.dbUri);
//app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
//app.use(passport.initialize());

// load passport strategies
//const localLoginStrategy = require('./src/passport/local-login');
//passport.use('local-login', localLoginStrategy);

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