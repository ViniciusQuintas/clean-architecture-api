import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  // [...]
  roots: ['<rootDir>/test'],
  transform: {
    ...createDefaultPreset().transform
    // [...]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/test/$1'
  }
}

export default jestConfig
