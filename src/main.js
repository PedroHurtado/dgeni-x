/**
 * @ngdoc overview
 * @name Main
 *
 * @description
 *
 */
var app = angular.module('app');

/**
 * @ngdoc service
 * @module x
 * @name Thing
 *
 * @description 
 * Something
 */
app.service('Thing', [
	'$window',
	function () {
	
	}
]);

angular.bootstrap($(document.body), ['app']);