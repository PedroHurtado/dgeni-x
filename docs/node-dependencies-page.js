var _ = require('underscore');
var npm = require('npm');

module.exports = {
	name: 'node-dependencies-page',
	description: "",
	runAfter: ['adding-extra-docs'],
	runBefore: ['extra-docs-added'],
	process: function (docs, config) {
		var pkg = config.get('npm-package');

		return new Promise(function (resolve, reject) {
			var handleError = function (er) { reject(er); return er; };

			npm.load(pkg, function (er) {
				if (er) { return handleError(er); }

				npm.commands.ls(["--depth 0", "--json true", "--parseable true"], function (er, deps) {
					if (er || !deps) { return handleError(er); }

					var doc = {
						docType: 'nodeDependencies',
						id: 'node-dependencies-page',
						outputPath: "node-dependencies.html",
						template: "node-dependencies.template.html",
						dependencies: deps
					};

					docs.push(doc);

					resolve();
				});
			});
		});
	}
};