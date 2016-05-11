angular.module('account.controllers', [])
.controller('AppointmentCtrl', function($scope) {
  
  })

.controller('AccountCtrl', function($scope, $rootScope, $state, $http) {
  
    $scope.goToRecords = function(){
    
    $http.get("http://localhost:3000/account/records/").success(function(data){$rootScope.val=data.mes;console.log("message");});
    
    console.log($rootScope.val);
    
      $state.go('records')
    };
    $scope.goToAppointment = function(){
      $state.go('appointments')
    };
    $scope.goToReports = function(){
      $state.go('reports')
    };
    $scope.goToBilling = function(){
      $state.go('billing')
    };
    $scope.goToSettings = function(){
      $state.go('settings')
    };
    $scope.goToInsurance = function(){
      $state.go('insurance')
    };
  })
.controller("RecordCtrl", function($scope, $rootScope, $http){

  $rootScope.onRecordClick = function(){
  
    
  }

})

;
