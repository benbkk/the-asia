import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import paths from './paths';

export default {
    output: {
        filename: "js/bundle.js"
    },
    resolve: {
        alias: {
            components: paths.appComponents,
            config    : paths.appConfig
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
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
           /*  {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            } */
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.ejs",
            title: 'Frontend Starter',
            filename: "index.html"
        }),
       /* new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }) */
    ]
};