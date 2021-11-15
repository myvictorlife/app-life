const esModules = ['@ionic', '@ionic-native'].join('|');
import 'jest-preset-angular/setup-jest';

module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
            { targets: { node: true }, modules: 'commonjs' }
          ]
        ],
        plugins: ['@babel/plugin-syntax-dynamic-import']
      }
    }
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  collectCoverageFrom: ["**/*.{js,jsx}", "!**/node_modules/**", "!**/vendor/**"]
};