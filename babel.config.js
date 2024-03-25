module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'NODE_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@theme': './src/theme/theme.ts',
          '@icons': './src/assets/icons',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@domain': './src/domain',
          '@brand': './src/assets/brand',
          '@api': './src/api',
          '@types': './src/types',
          '@utils': './src/utils',
          '@infra': './src/infra',
          '@services': './src/services',
          '@test': './src/test',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
