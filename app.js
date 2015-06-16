var app = angular.module('familyCalendar', ['ngRoute', 'firebase']);

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
		templateUrl: 'userPage/user.html',
		controller: 'userCtrl'
	})

	// user id path??

	.otherwise({
    redirectTo: '/login'
	})

})