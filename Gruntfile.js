var dgeni = require('dgeni');

module.exports = function (grunt) {
  grunt.registerTask('dgeni', "Generate documentation with dgeni", function () {
    var done = this.async();

    dgeni.generator('docs/dgeni.conf.js').call()
		.then(done);
  });

  grunt.registerTask('default', ['dgeni']);
};