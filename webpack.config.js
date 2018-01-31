
const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                include: path.join(__dirname, 'src'),
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    },
    node: {
  fs: 'empty',
  net: 'empty'
},
    resolve: {
        extensions: ['.js', '.jsx']
    }
};