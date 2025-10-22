const path = require('path'); // Node.js built-in module for handling paths
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin to generate an HTML file from a template
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Plugin to extract CSS into separate files
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // Sets the mode to development for better debugging and unminified output
  entry: {
    main: './src/scripts/main.js', // Main JavaScript file
    particles: './src/scripts/particle.js', // Secondary JavaScript file
  },
  output: {
    filename: '[name].bundle.js', // Output filename format where [name] corresponds to the entry point names
    path: path.resolve(__dirname, 'dist'), // Output directory (absolute path)
    clean: true, // Cleans the output directory (dist) before each build
  },
  devtool: 'inline-source-map', // Enables inline source maps for easier debugging
  module: {
    rules: [
      {
        test: /\.scss$/, // Rule to process SCSS files
        use: [
          MiniCssExtractPlugin.loader, // Loader to extract CSS into separate files
          'css-loader', // Translates CSS into CommonJS modules
          'sass-loader', // Compiles SCSS to CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3|wav|woff2?|ttf|eot)$/i, // Supported file extensions
        type: 'asset/resource', // Handles these files as static resources
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Uses the existing HTML file as a template
      filename: 'index.html', // Output filename for the generated HTML file
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Name of the generated CSS file
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'public' }, // Copies everything from the 'public' folder to 'dist/public'
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serves static files from the 'public' directory
    },
    open: true, // Automatically opens the default browser when the server starts
    hot: true, // Enables hot module replacement for live updates
    port: 3000, // Specifies the port number for the dev server
  },
  optimization: {
    runtimeChunk: 'single', // Extracts the runtime into a separate file for better caching
    splitChunks: {
      chunks: 'all', // Extracts common dependencies into separate files for better caching
    },
    minimize: true, // Enables code minimization (default in production mode)
  },
};
