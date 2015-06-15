var app = angular.module('familyCalendar', ['ngRoute', 'firebase']);

app.config(function($routeProvider){

	$routeProvider
	.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
	})

	.otherwise({
    redirectTo: '/login'
	})

})