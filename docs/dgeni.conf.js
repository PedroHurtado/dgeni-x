var path = require('path');
var ngdoc = require('dgeni-packages/ngdoc');

module.exports = function (config) {
  ngdoc(config);

  config.set('logging.level', 'info');

  config.set('source.projectPath', '.');

  config.set('source.files', [
    {

      pattern: 'src/**/*.js',
      basePath: path.resolve(__dirname, '..')
    }
  ]);

  config.set('rendering.outputFolder', '../build/');

  config.set('rendering.contentsFolder', 'docs');

  return config;
};