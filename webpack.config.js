module.exports = {
  entry: './modules/main.jsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ["", ".jsx", ".js"],
    modulesDirectories: ["modules", "node_modules"]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};
