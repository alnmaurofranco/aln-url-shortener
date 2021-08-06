/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { pathsToModuleNameMapper } from 'ts-jest/utils';

import { compilerOptions } from './tsconfig.json';

export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/@types/*.ts',
    '!src/config/*.ts',
    '!src/infra/**/*.ts',
    '!src/**/entities/*.ts',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src',
  }),
  preset: 'ts-jest',
  testEnvironment: 'node',
};
