//https://github.com/taniarascia/webpack-boilerplate
//https://github.com/manchenkoff/webpack-bootstrap
//https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html
//https://getbootstrap.com/docs/4.0/getting-started/webpack/
//https://riptutorial.com/it/webpack

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

/**
 * Base webpack configuration
 *
 * @param env -> env parameters
 * @param argv -> CLI arguments, 'argv.mode' is the current webpack mode (development | production)
 * @returns object
 */
module.exports = (env, argv = {}) => {

    let isProduction = (argv.mode === 'production');

    let config = {

        context: path.resolve(__dirname, 'src'),

        // development server with hot-reload
        devServer: {
            contentBase: path.join(__dirname, 'docs'),
            watchContentBase: true,
            compress: true
        },

        entry: [
            './js/index.js',
            './scss/index.scss',
        ],

        // enable development source maps
        // * will be overwritten by 'source-maps' in production mode
        devtool: "inline-source-map",

        output: {
            filename: 'js/app.js',
            path: path.resolve(__dirname, 'docs/assets'),
            publicPath: '/assets/'
        },

        plugins: [

            new MiniCssExtractPlugin({
                filename: 'css/app.css'
            }),

            // provide jQuery and Popper.js dependencies
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            }),

            // copy static assets directory
            new CopyPlugin({
                patterns: [
                    {from: 'img', to: 'img'},
                    {from: 'fonts', to: 'fonts'}
                ],
            }),

            // image optimization
            new ImageminPlugin({
                // disable for dev builds
                disable: !isProduction,
                test: /\.(jpe?g|png|gif)$/i,
                pngquant: {quality: '70-85'},
                optipng: {optimizationLevel: 9}
            }),
        ],

        optimization: {
            minimizer: [
                // CSS optimizer
                new OptimizeCSSAssetsPlugin(),
                // JS optimizer by default
                new TerserPlugin(),
            ],
        },

        module: {

            rules: [
                // styles loader
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ],
                },

                // images loader
                {
                    test: /\.(png|jpe?g|gif)$/,
                    loaders: [
                        {
                            loader: "file-loader",
                            options: {
                                name(resourcePath, resourceQuery) {
                                    // `resourcePath` - `/absolute/path/to/file.js`
                                    // `resourceQuery` - `?foo=bar`

                                    if (/node_modules/.test(resourcePath)) {

                                        const relativePath = path.relative('node_modules', resourcePath);

                                        return 'img/lib/' + relativePath + '[name].[ext]';
                                    }

                                    return "[path][name].[ext]";
                                },
                            }
                        }
                    ],
                },

                // fonts loader
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "fonts/[name].[ext]"
                            }
                        },
                    ],
                },

                // svg inline 'data:image' loader
                {
                    test: /\.svg$/,
                    loader: "svg-url-loader"
                },
            ]
        }
    }

    return config;
};
