var _ = require('underscore');
var bower = require('bower');

/**
 * @dgeni processor
 * @name bower-dependencies-page
 *
 * @runsAfter adding-extra-docs
 * @runsBefore extra-docs-added
 *
 * @requires bower-package
 *
 * @description
 * Generate a dependencies page for bower
 */
module.exports = {
	name: 'bower-dependencies-page',
	description: "",
	runAfter: ['adding-extra-docs'],
	runBefore: ['extra-docs-added'],
	requires: ['bower-package'],
	process: function (docs, config) {
		var pkg = config.get('bower-package');

		return new Promise(function (resolve, reject) {
			bower.commands.list()
				.on('error', reject)
				.on('end', function (data) {
					var deps = data.dependencies;

					var doc = {
						docType: 'bowerDependencies',
						id: 'bower-dependencies-page',
						outputPath: "bower-dependencies.html",
						template: "bower-dependencies.template.html",
						dependencies: deps
					};

					docs.push(doc);

					resolve();
				});
		});
	}
};