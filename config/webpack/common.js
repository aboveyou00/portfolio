let { ProvidePlugin } = require('webpack');
var path = require('path');

var stats = {
    warningsFilter: /System.import/
};

// Our Webpack Defaults
var defaultConfig = {
    devtool: 'cheap-module-source-map',
    cache: true,
    mode: 'development',
    
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    
    plugins: [
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    
    resolve: {
        modules: [
            path.join(__dirname, '../../node_modules'),
            path.join(__dirname, '../../src'),
            path.join(__dirname, '../../public/assets'),
            path.join(__dirname, '../../')
        ],
        alias: {
            'jquery': 'jquery/src/jquery'
        },
        extensions: ['.ts', '.js']
    },
    
    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        process: true,
        module: false,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    },
    
    stats,
    devServer: {
        stats
    }
};
module.exports = defaultConfig;
