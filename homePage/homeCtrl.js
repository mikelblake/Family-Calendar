var app = angular.module('familyCalendar');

app.controller('homeCtrl', function($scope, $firebaseArray){
	var firebaseRoot = "https://family-calendar.firebaseio.com/";

	var memRef = new Firebase(firebaseRoot + "/fam_mem");
  var firebaseMems = $firebaseArray(memRef);

	$scope.mems = firebaseMems;
	$scope.mems.$loaded().then(function(){
	})

  $scope.addMem = function(mem) {
    firebaseMems.$add({ name: mem }).then(function(addedMemRef) {
    	var id = addedMemRef.key();
    	var index = firebaseMems.$indexFor(id);
    })
  };
  $scope.eventSources = [];
});
