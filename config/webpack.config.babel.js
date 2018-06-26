import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const vendors = [
    'emotion',
    'react',
    'react-dom',
    'react-emotion',
    'polished',
    'prop-styles',
    'prop-types',
    'typeface-montserrat'
];

import paths from './paths';
import postCssConfig from './postcss.config';

export default {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'js/bundle.js'
    },
    resolve: {
        alias: {
            components: paths.appComponents,
            static: paths.appStaticComponent,
            config: paths.appConfig
        },
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "webpack-px-to-rem",
                        query: {
                            basePx: 16,
                            min:1,
                            floatWidth: 3,
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
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
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => postCssConfig
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './fonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.ejs",
            title: 'Frontend Starter',
            filename: "index.html",
            inject: true,
            minify: true
        }),
        new CleanWebpackPlugin(
            [paths.appDist], 
            {
                allowExternal: true
            }
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        /* new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }) */
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    devServer: {
        contentBase: './',
        hot: true,
    },
};