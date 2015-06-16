var app = angular.module('familyCalendar');

app.controller('homeCtrl', function($scope, $firebaseArray){
	var firebaseRoot = "https://family-calendar.firebaseio.com/";

	var memRef = new Firebase(firebaseRoot + "/fam_mem");
  var firebaseMems = $firebaseArray(memRef);

	$scope.mems = firebaseMems;
	$scope.mems.$loaded().then(function(){
		console.log($scope.mems);
	})

  $scope.addMem = function(mem) {
  	console.log(mem);
      memRef.child(mem).set({name: mem});
      
  };
});

