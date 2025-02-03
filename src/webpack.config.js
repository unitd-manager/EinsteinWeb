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
module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    ignoreWarnings: [/source-map-loader/], // Suppress warnings from source-map-loader
  };
  