module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@infra': './src/infra',
          '@prismadb': './src/infra/prisma',
          '@validation': './src/infra/validation',
          '@modules': './src/modules',
          '@errors': './src/infra/http/errors',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts', '**/*.test.ts'],
};
