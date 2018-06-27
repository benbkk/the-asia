import autoprefixer from 'autoprefixer';

export default {
    plugins: [
        autoprefixer({
            browsers: ['> 1%', 'last 2 versions'],
        }),
    ],
};
