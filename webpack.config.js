module.exports = {
    devtool: "source-map",
    entry: "./app/Router.jsx",
    output: { path: __dirname + "/public/", filename: "bundle.js" },
    resolve: {
        extensions : ["", ".webpack.js", ".web.js", ".js", ".jsx", ".json"]
    },
    plugins: [
    //new webpack.NoErrorsPlugin()
    ],
    module: {
        noParse: [
            /node_modules\/sinon\//
        ],
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            {
                test: /.json/,
                loader: "json"
            }
        ]
    },
    externals: {
        "react/addons": true,
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true
    }
};
