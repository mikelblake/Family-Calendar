var app = angular.module('familyCalendar');

app.controller('memCtrl', function($scope, $firebaseObject, $routeParams, $window){
	var firebaseRoot = "https://family-calendar.firebaseio.com/";

	var usersRef = new Firebase(firebaseRoot + "/fam_mem/" + $routeParams.id);
  var firebaseUsers = $firebaseObject(usersRef);

	$scope.mem = firebaseUsers;

	$scope.addForm = function(form){
		
		$scope.formType = form;
	}
	
	$scope.submitForm = function(option){
	
		if(!$scope.mem[$scope.formSelect]){
			$scope.mem[$scope.formSelect] =[];
		}
		$scope.mem[$scope.formSelect].push(option);
		$scope.mem.$save($scope.formSelect);
		console.log($scope.mem);
	}

	$scope.backButton = function(){
		$window.location.href = '/#/home';
	}
})