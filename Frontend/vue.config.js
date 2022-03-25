module.exports = {
    devServer: {
        proxy: process.env.VUE_APP_PROXY,
        host: process.env.VUE_APP_HOST,
        port: process.env.VUE_APP_PORT,
        https: false // process.env.VUE_APP_IS_HTTPS
    },
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    data: `@import "~@/sass/main.scss"`
                }
            }
        }
    },
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
};