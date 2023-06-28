module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/app/assets',
            '@components': './src/app/components',
            '@constants': './src/app/constants',
            '@flows': './src/app/flows',
            '@hooks': './src/app/hooks',
            '@providers': './src/app/providers',
            '@routes': './src/app/routes',
            '@mocks': './src/app/mocks',
            '@store': './src/app/store',
            '@styles': './src/app/styles',
            '@ts': './src/app/ts',
            '@utils': './src/app/utils',
            '@services': './src/infra/services',
            '@http': './src/infra/http',

            '@model': './src/model',
          },
        },
      ],
    ],
  };
};
