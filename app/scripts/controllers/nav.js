'use strict';

//this controller changes to active class on the nav bar
//depending on the current page

angular.module('techsysPowerApp')
  .controller('NavCtrl', function ($scope) {
    $scope.links = [
    	{'name':'Home',
    	'route': '#'},
    	{'name':'About',
    	'route': '#/about'},
    	{'name': 'Services',
    	'route': '#/services'},
    	{'name': 'Contact', 
    	'route': '#/contact'}];

	$scope.selectedTab = 0;

	$scope.changeTab = function ($index) {
		$scope.selectedTab = $index;
	}
  });