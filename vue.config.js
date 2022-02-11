const path = require("path");

module.exports = {
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
        config.resolve.alias.set("public", path.resolve(__dirname, "public/"));
        config.resolve.alias.set("@", path.resolve(__dirname, "src/"));
        config.resolve.alias.set("assets", path.resolve(__dirname, "src/assets"));
    },
    publicPath: './',
    // process.env.NODE_ENV === "production" ? process.env.VUE_APP_BASEPATH : "/", //"./",
    configureWebpack: {
        // No need for splitting
        optimization: {
            splitChunks: false,
        },
        output: {
            filename: "header-vue.min.js",
        },
    },
    css: {
        extract: {
            filename: 'header-vue.css',
        },
    },
    pluginOptions: {
        i18n: {
            locale: "ru",
            fallbackLocale: "ru",
            localeDir: "locales",
            enableInSFC: true
        }
    }
};
