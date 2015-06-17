var app = angular.module('familyCalendar', ['ngRoute', 'firebase', 'ui.calendar']);

app.config(function($routeProvider){

	$routeProvider
	.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
	})

	.when('/home', {
		templateUrl: 'homePage/home.html',
		controller: 'homeCtrl'
	})

	.when('/fam_mem/:id', {
		templateUrl: 'memPage/mem.html',
		controller: 'memCtrl'
	})

	.otherwise({
    redirectTo: '/login'
	})

})