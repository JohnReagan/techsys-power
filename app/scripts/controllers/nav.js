'use strict';

//this controller changes to active class on the nav bar
//depending on the current page

angular.module('techsysPowerApp')
  .controller('NavCtrl', function ($scope) {
    // $scope.links = [
    // 	{'name':'Home',
    // 	'route': '/',
    // 	'active': false},
    // 	{'name':'About',
    // 	'route': '/about',
    // 	'active': false},
    // 	{'name': 'Services',
    // 	'route': '/services',
    // 	'active': false},
    // 	 'Contact'];

	$scope.selectedIndex = 0;

	$scope.changeTab = function (index) {
		selectedIndex = index;
	}
  });