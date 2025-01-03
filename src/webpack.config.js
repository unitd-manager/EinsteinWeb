module.exports = {
    rules: [
        // other rules
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
            ],
            enforce: 'pre',
        },
        {
            enforce: 'pre',
            test: /\.css$/,
            loader: 'source-map-loader',
            exclude: /node_modules/,
        },
    ],
}
