module.exports = {
    entry: "./src/Game.ts",
    devtool: "source-map",
    output: {
        filename: "./bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    }
}