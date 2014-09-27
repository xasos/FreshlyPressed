angular.module("FreshlyPressed", ["ionic"])
.controller("MainCtrl", function($scope, $log, latestStuff) {
	$scope.posts = [];
	$scope.refresh = function() {
		latestStuff.getBlogs($scope);
	};
})

.service("latestStuff", function($http, $log) {
	this.getBlogs = function($scope) {
		$http.jsonp("https://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK")
			.success(function(result) {
				$scope.posts = result.posts;
				$scope.$broadcast("scroll.refreshComplete");
				$log.info(JSON.stringify(result.posts));
			});
	};
})
