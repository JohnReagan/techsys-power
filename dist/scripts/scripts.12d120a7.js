"use strict";angular.module("techsysPowerApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/services",{templateUrl:"views/services.html",controller:"ServicesCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("techsysPowerApp").controller("NavCtrl",["$scope",function(a){a.links=[{name:"Home",route:"#"},{name:"About",route:"#/about"},{name:"Services",route:"#/services"},{name:"Contact",route:"#/contact"}],a.selectedTab=0,a.changeTab=function(b){a.selectedTab=b}}]),angular.module("techsysPowerApp").controller("MainCtrl",["$scope",function(a){a.currentProjects=[{name:"AFCENT/ARCENT",snippet:"Backup Power for Communication Systems Support in Southwest Asia (SWA)"},{name:"Food Lion - UPS Replacements",snippet:"50 Locations - GA, NC, OH, PA, VA"},{name:"Commonwealth of Virginia Pre-Qualified SWaM Electrical Contractor",snippet:""},{name:"Commonwealth of Virginia Pre-Qualified Power Conditioning Contractor",snippet:""},{name:"Jones Lang LaSalle Maintenance Projects",snippet:"North Carolina, Virginia"},{name:"Wells Fargo Critical Power Contractor",snippet:""}],a.completedProjects=[{name:"Federal Reserve Bank",snippet:"UPS batter replacement in Richmond, VA"},{name:"Food Lion Distribution Center",snippet:"UPS System"},{name:"DIA, Camp Walker, South Korea",snippet:"Data Center APC Hot Aisle Containment,PDUs, InRow RCs, Critical Power Distribution and VESDA Fire Detection"},{name:"LF Wade International Airport",snippet:"Replace (3) Generators in St. George, Bermuda"}]}]),angular.module("techsysPowerApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);