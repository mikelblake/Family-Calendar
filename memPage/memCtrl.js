var app = angular.module('familyCalendar');

app.controller('memCtrl', function($scope, $firebaseObject, $routeParams, $window, $firebaseArray){
	var firebaseRoot = "https://family-calendar.firebaseio.com/";

	var usersRef = new Firebase(firebaseRoot + "/fam_mem/" + $routeParams.id);
  
  var firebaseUsers = $firebaseObject(usersRef);
	$scope.mem = firebaseUsers;
	
	$scope.submitForm = function(infoObj){
		var memInfoRef = usersRef.child($scope.formSelect);
		var memInfoArray = $firebaseArray(memInfoRef);
		if(!$scope.formSelect) return;
		memInfoArray.$add(infoObj);
	}

	$scope.backButton = function(){
		$window.location.href = '/#/home';
	}
	
})
