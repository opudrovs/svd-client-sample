module.exports = {
    distDir: 'dist',
    sassOptions: {
        // Scss code that you want to be prepended to every single scss file.
        prependData: '@import \'styles/theme\';'
    },
    future: {
        webpack5: true
    }
};
