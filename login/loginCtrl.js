var app = angular.module('familyCalendar');

app.controller('loginCtrl', function($scope, $firebaseArray, $firebaseObject, $firebaseAuth) {
	var firebaseRoot = "https://family-calendar.firebaseio.com/",
  	ref = new Firebase(firebaseRoot),
    authObj = $firebaseAuth(ref);

  authObj.$onAuth(function(authData) {
    $scope.authData = authData;
  })

  $scope.login = function(user) {
    authObj.$authWithPassword(user).then(function(authData) {
        console.log('login authData', authData);
    }, function(error) {
        alert(error);
    });
  };

})