/**
 * Created by GaoQ on 2016/3/8.
 */
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    devtool: debug ? "inline-source-map" : null,
    entry:"./src/js/client.js",
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015','stage-0'],
                    plugins:['react-html-attrs','transform-class-properties','transform-decorators-legacy']
                }
            }
        ]
    },
    output:{
        path:__dirname+"/src/",
        filename:"client.min.js"
    },
    plugins:debug?[]:[
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle:false,sourcemap:false})
    ]
};