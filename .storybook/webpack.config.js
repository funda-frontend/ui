const path = require("path");

module.exports = ({config}) => {
    config.module.rules.push({
        test: /\.css$/,
        use: ['postcss-loader' ],
        include: path.resolve(__dirname, "../")
    },
    {
        test: /\.postcss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader'
          ]
      });

    // setup URL Alias
    config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src")
    };
    return config;
};
