angular.module('starter.controllers', [])


.controller('SignInCtrl', function($scope, $state, $rootScope){

  
  $scope.signIn = function(user) {
  
    // call signIn(user) on server 
    // return error and redirect to sign in if fails
    $rootScope.user = user ;
    $state.go('tab.dash');
  

  };

})
.controller('RegisterCtrl', function($rootScope, $scope, $state){

  $rootScope.user = null;
  // register
  $scope.register = function(user){
    console.log(user);
  }

})
.controller('ForgotPasswordCtrl', function($scope, $rootScope, $state){

  $scope.forgot = function($email){
    
    if($email)
      console.log($email);
    // call forgot(email) on server
    else
      console.log("error");
  }
})
.controller('DashCtrl', function($scope, $state, $rootScope, DashboardData) {

  // show the contents of dash
  var u = DashboardData.get($rootScope.user.username);
  $rootScope.user = u;
  console.log(u);
})

.controller('SearchCtrl', function($scope,$rootScope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.search = function(symptoms){
    console.log(symptoms);
  }

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
