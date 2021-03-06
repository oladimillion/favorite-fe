process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

module.exports = {
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "vue"
  ],
  "transform": {
    "^.+\\.vue$": "<rootDir>/node_modules/vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "/node_modules/"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "snapshotSerializers": [
    "jest-serializer-vue"
  ],
  "testURL": "http://localhost/",
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
}