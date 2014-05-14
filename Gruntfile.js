var dgeni = require('dgeni');
var npm = require('npm');

module.exports = function (grunt) {
	grunt.registerTask('dgeni', "Generate documentation with dgeni", function () {
		var done = this.async();

		dgeni.generator('docs/dgeni.conf.js').call()
			.then(done);
	});

	grunt.registerTask('lsdeps', function () {
		var pkg = grunt.config.get('pkg') || grunt.config.get('package');

		var done = this.async();
		var options = this.options();

		var handleError = function (er) { done(); return er; };

		npm.load(pkg, function (er) {
			if (er) { return handleError(er); }

			npm.commands.ls(["--depth 0", "--json true", "--parseable true"], function (er, data) {
				if (er || !data) { return handleError(er); }
				grunt.log.writeln(JSON.stringify(data));

				done();
			});
		});
	});

	grunt.registerTask('default', ['dgeni']);
};