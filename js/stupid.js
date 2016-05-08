var stupid = angular.module('stupid', []);
stupid.controller('sliderCtrl', ['$scope', '$interval', function($scope, $interval) {
	$scope.onOff = 0;
	$interval(function() {
		$scope.onOff++;
	}, 2000);
}]);
