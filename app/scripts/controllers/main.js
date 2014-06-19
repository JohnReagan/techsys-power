'use strict';

/**
 * @ngdoc function
 * @name techsysPowerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techsysPowerApp
 */
angular.module('techsysPowerApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.currentProjects = [
    	{'name': 'AFCENT/ARCENT',
    	'snippet': 'Backup Power for Communication Systems Support in Southwest Asia (SWA)'},
		{'name': 'Food Lion - UPS Replacements',
		'snippet': '50 Locations - GA, NC, OH, PA, VA'},
		{'name': 'Commonwealth of Virginia Pre-Qualified SWaM Electrical Contractor',
		'snippet': ''},
		{'name': 'Commonwealth of Virginia Pre-Qualified Power Conditioning Contractor',
		'snippet': ''},
		{'name': 'Jones Lang LaSalle Maintenance Projects', 
		'snippet': 'North Carolina, Virginia'},
		{'name': 'Wells Fargo Critical Power Contractor',
		'snippet': ''}
    ];
    $scope.completedProjects = [
    	{'name': 'Federal Reserve Bank',
    	'snippet': 'UPS batter replacement in Richmond, VA'},
		{'name': 'Food Lion Distribution Center',
		'snippet': 'UPS System'},
		{'name': 'DIA, Camp Walker, South Korea',
		'snippet': 'Data Center APC Hot Aisle Containment,PDUs, InRow RCs, Critical Power Distribution and VESDA Fire Detection'},
		{'name': 'LF Wade International Airport',
		'snippet': 'Replace (3) Generators in St. George, Bermuda'}
    ];

    $scope.currentProjectIndex = 0;
    $scope.currentProject = $scope.currentProjects[$scope.currentProjectIndex];

    $scope.nextProject = function () {
    	if ($scope.currentProjectIndex >= $scope.currentProjects.length-1) {
    		$scope.currentProjectIndex=0;
    	} else {
    		$scope.currentProjectIndex++;
    	}
    };
  });
