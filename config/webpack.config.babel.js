import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import paths from './paths';
import postCssConfig from './postcss.config';

export default {
    entry: {
        main: [
            paths.indexJs,
        ],
    },
    output: {
        filename: 'js/[name]-[hash].js',
        chunkFilename: 'js/[name]-[chunkhash].js',
        path: `${paths.dist}/`,
        publicPath: '/',
    },
    resolve: {
        alias: {
            indexJs: paths.indexJs,
            components: paths.components,
            public: paths.public,
            static: paths.static,
            config: paths.config,
            src: paths.src,
            dist: paths.dist,
            css: paths.css,
            img: paths.img,
            fonts: paths.fonts,
            helpers: paths.helpers,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].html',
                        },
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: [
                                'img:src',
                                'img:srcset',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => postCssConfig,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                            path: `${paths.dist}/fonts`,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]',
                            path: `${paths.dist}/img`,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${paths.public}/index.ejs`,
            filename: 'index.html',
            title: 'Destinations | The Asia - Your Experience, Your Asia',
            minify: true,
            favicon: `${paths.public}/favicon.png`,
            prefix: '/',

        }),
        new CleanWebpackPlugin(
            [paths.dist],
            {
                allowExternal: true,
            },
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        splitChunks: {
            name: false,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                    enforce: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        minimizer: [
            new UglifyJSPlugin({
                parallel: true,
                cache: true,
                sourceMap: false,
                uglifyOptions: {
                    ecma: 5,
                    warnings: true,
                    comments: false,
                    beautify: true,
                },
            }),
        ],
    },
    devServer: {
        publicPath: '/',
        historyApiFallback: true,
        contentBase: false,
        hot: true,
    },
};
