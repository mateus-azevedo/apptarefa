module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          '@architecture': './src/architecture',
          '@config': './src/config',
          '@features': './src/features',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
