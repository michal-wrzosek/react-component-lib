module.export = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
          webpackConfig.entry = './src/index.tsx';
          return webpackConfig;
        },
      },
      eslint: {
        enable: true ,
        mode: 'extends'  || 'file',
        configure: (eslintConfig, { env, paths }) => {
          return eslintConfig;
        },
        pluginOptions: (eslintPluginOptions, { env, paths }) => {
          return eslintPluginOptions;
        },
      },
}