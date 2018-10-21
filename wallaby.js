module.exports = function(wallaby) {
  return {
    files: [
      "src/**/*.js",
      "package.json",
      { pattern: "src/**/*.spec.js", ignore: true }
    ],
    tests: ["src/**/*.spec.js"],
    testFramework: "jest",
    env: {
      type: "node",
      runner: "node"
    }
  }
}
