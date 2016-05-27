module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: ["mocha", "chai"],
        plugins: [
            "karma-mocha",
            "karma-chai",
            "karma-webpack",
            "karma-phantomjs-launcher",
            "karma-spec-reporter",
            "karma-sourcemap-loader"
        ],
        webpack: require("./webpack.config.js"),
        webpackServer: {
            noInfo: true
        },
        files: [
            "webpack.test.config.js"
        ],
        exclude: [],
        preprocessors: {
            "webpack.test.config.js": ["webpack", "sourcemap"]
        },
        reporters: ["spec"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["PhantomJS"],
        singleRun: false,
        concurrency: Infinity
    });
};
