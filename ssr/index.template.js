module.exports = (Markup) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Home</title>
        <meta charset="utf-8">
    </head>
    <body>
        
        <div id="root" />
        ${Markup}
        <script type="text/javascript" src="bundle.js"></script>
    </body>
    </html>
`;