import path from 'path';

export default {
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist'),
    config: path.resolve(__dirname, '../config'),
    css: path.resolve(__dirname, '../src/css'),
    helpers: path.resolve(__dirname, '../src/helpers'),
    public: path.resolve(__dirname, '../public'),
    img: path.resolve(__dirname, '../public/img'),
    fonts: path.resolve(__dirname, '../public/fonts'),

    indexJs: path.resolve(__dirname, '../src/index.js'),
    components: path.resolve(__dirname, '../src/components'),
    static: path.resolve(__dirname, '../src/components/static'),
};
