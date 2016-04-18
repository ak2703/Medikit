angular.module('starter.controllers', [])


.controller('SignInCtrl', function($scope, $state, $rootScope, $ionicPopup, $timeout, $http){

  
  $scope.signIn = function(user) {
  
    // call signIn(user) on server 
    $http.post("http://localhost:3000/signin", user).success(function(data){
      
      console.log(data);
      
      if(data.message != "Error"){

        $rootScope.user = data;
        $state.go('tab.dash');
        
      }

      else{
            // show popup here
  
                var f =function(){

                 var alertPopup = $ionicPopup.alert({
                   title: 'Error',
                   template: 'Wrong username or password'
                 });

               alertPopup.then(function(res) {
                $rootScope.user = null;
                $state.go('signin');
             });
               
           };
      
           f();
        }

      });
    // return error and redirect to sign in if fails
  

  };

})
.controller('RegisterCtrl', function($rootScope, $scope, $state, $http){

  
  // register
  $scope.register = function(user){
    
    $http.post("http://localhost:3000/register", user).success(function(data, status, headers, config){
      
        if(data.message == "Error"){

        }
        else{

            $state.go('signin');
        }

      });

  }

  $rootScope.user = null;
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
.controller('DashCtrl', function($scope, $state, $rootScope, $http) {

  // show the contents of dash
  
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

.controller('AppointmentCtrl', function($scope) {
  
  })

.controller('AccountCtrl', function($scope, $state) {
  
    $scope.goToAppointment = function(){
      $state.go('appointments')
    };
  });

;
