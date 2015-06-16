var app = angular.module('familyCalendar');

app.controller('loginCtrl', function($scope, $firebaseArray, $firebaseObject, $firebaseAuth, $window) {
	var firebaseRoot = "https://family-calendar.firebaseio.com/";
  var ref = new Firebase(firebaseRoot);
  var authObj = $firebaseAuth(ref);
  var usersRef = new Firebase(firebaseRoot + '/users');

  authObj.$unauth();

  authObj.$onAuth(function(authData) {
    $scope.authData = authData;
    
    if (authData) { // Set up user object if authData present
      var userRef = new Firebase(firebaseRoot + '/users/' + authData.uid),
          user = $firebaseObject(userRef);

      user.$loaded().then(function(user) { // Wait for user to be loaded before setting user details
          user.lastLogin = new Date().toString();
          user.$save();
          user.$bindTo($scope, 'user');
      });
    }
  })

  
  $scope.loginToggle = function(){
    $scope.show = show;
  }

  $scope.login = function(loginInput) {
    authObj.$authWithPassword(loginInput).then(function(loginData) {
        $window.location.href = '/#/home';
    }, function(error) {
        console.log(error);
    });
  };
  $scope.register = function(registerInput) {
    authObj.$createUser(registerInput)
    .then(function(createdUserData) {
        console.log('login createdUserData', createdUserData);
        var userRef = usersRef.child(createdUserData.uid);
        var userObj = $firebaseObject(userRef);
        userObj.name = registerInput.name;
        console.log('userObj: ', userObj);
        userObj.$save();
        $scope.login(registerInput);
    }, function(error) {
        alert(error);
    });
  };


})