/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],
};

module.exports = createJestConfig(customJestConfig);
