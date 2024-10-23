import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  // [...]
  roots: ['<rootDir>/test'],
  transform: {
    ...createDefaultPreset().transform
    // [...]
  }
}

export default jestConfig
