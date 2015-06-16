var app = angular.module('familyCalendar');

app.controller('userCtrl', function($scope, $firebaseObject, $routeParams, $window){
	var firebaseRoot = "https://family-calendar.firebaseio.com/";

	var usersRef = new Firebase(firebaseRoot + "/users/" + $routeParams.id);
  var firebaseUsers = $firebaseObject(usersRef);

	$scope.user = firebaseUsers;

	$scope.addForm = function(form){
		
		$scope.formType = form;
	}
	
	$scope.submitForm = function(option){
	
		if(!$scope.user[$scope.formSelect]){
			$scope.user[$scope.formSelect] =[];
		}
		$scope.user[$scope.formSelect].push(option);
		$scope.user.$save($scope.formSelect);
		console.log($scope.user);
	}

	$scope.backButton = function(){
		$window.location.href = '/#/home';
	}
})