const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js'
    },
    // externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin()
    ]
}