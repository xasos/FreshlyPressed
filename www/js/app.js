angular.module("FreshlyPressed", ["ionic"])
.controller("MainCtrl", function($scope, $log, latestStuff) {
	$scope.refresh = function() {
		latestStuff.getBlogs();
	};
})

.service("latestStuff", function($http, $log) {
	this.getBlogs = function() {
		$http.jsonp("https://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK")
			.success(function(result) {
				$log.info(JSON.stringify(result.posts));
			});
	};
})
