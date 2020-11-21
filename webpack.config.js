const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const baseDir = __dirname;
const sourceDir = path.resolve(baseDir, 'src');
const outputDir = path.resolve(baseDir, 'public');

module.exports = {
  mode: 'development',
  entry: path.resolve(sourceDir, 'js', 'app.js'),
  output: {
    path: outputDir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
            },
          },
          'pug-html-loader',
        ],
      },
      {
        test: /\.js$/,
        use: [
          'import-glob-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(?:svg|png|ico|xml|webmanifest)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: p => path.relative(sourceDir, p),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'node_modules/devicon/fonts', to: 'fonts' },
      ],
    })
  ],
};
