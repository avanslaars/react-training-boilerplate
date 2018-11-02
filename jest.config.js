module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/testSetup.js',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
}
