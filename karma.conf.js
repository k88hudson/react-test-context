module.exports = function (config) {
  config.set({
    singleRun: true,
    browsers: ['Firefox'],
    frameworks: ['mocha'],
    reporters: ['mocha'],
    files: [
      'tests/index' + (process.env.TEST_ENV === 'LEGACY' ? '.legacy': '') +'.js'
    ],
    preprocessors: {
     'tests/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
