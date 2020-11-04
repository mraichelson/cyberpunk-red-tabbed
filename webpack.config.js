const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = (env, args) => {
  return {
    entry: {
      main: ['./src/scss/main.scss']
    },
    output: {
      jsonpFunction: 'MyCustomWebpackNamespace',
      path: `${__dirname}/dist`
    },
    optimization: {
      minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()]
    },
    plugins: setWebpackConfigPlugins(),
    devServer: {
      host: '0.0.0.0',
      open: true,
      openPage: `http://0.0.0.0:${args.port}/`,
      port: args.port
    },
    module: {
      rules: [
        {
          test: /\.ejs$/,
          use: [
            {
              loader: 'ejs-loader',
              options: {
                esModule: false
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('autoprefixer')({ grid: 'autoplace' })]
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    stats: 'minimal'
  };
};

function setWebpackConfigPlugins() {
  const plugins = [];
  const pagesToPublish = [
    {
      template: './src/pages/character-sheet.html',
      filename: 'character-sheet.html'
    }
  ];

  // make the underscore lib available during build;
  // EJS makes use of underscore;
  // underscore should NOT be used on the client-side, use lodash if needed;
  plugins.push(
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  );

  // delete any existing `dist` content;
  plugins.push(new CleanWebpackPlugin());

  // publish the compiled CSS to a file;
  plugins.push(new MiniCssExtractPlugin());

  // publish the complied HTML pages and then format them with Beautify;
  pagesToPublish.forEach((htmlObj) => {
    plugins.push(new HtmlWebPackPlugin(htmlObj));
  });
  plugins.push(new BeautifyHtmlWebpackPlugin());
  // plugins.push(
  //   new ScriptExtHtmlWebpackPlugin({
  //     inline: [/\.js$/]
  //   })
  // )

  // return all plugins to use within webpack;
  return plugins;
}
