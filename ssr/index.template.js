const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM('');
const { document } = (new JSDOM(``)).window;
global.$ = require('jquery')(window);

module.exports = loginMarkup => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Example App</title>
        <meta charset="utf-8">
    </head>
    <body>
        ${loginMarkup}
        <script type="text/javascript" src="bundle.js"></script>
    </body>
    </html>
`;