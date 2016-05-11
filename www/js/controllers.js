angular.module('starter.controllers', [])
.controller('SignInCtrl', function($scope, $state, $rootScope, $ionicPopup, $timeout, $http){

  
  $scope.signIn = function(user) {
  
    // call signIn(user) on server 
    $http.post("http://localhost:3000/signin", user).success(function(data){
      
      console.log(data);
      
      if(data.message != "Error"){

        $rootScope.user = data;
        $rootScope.gender = "Female";
        $rootScope.birth_year = "1988";
  
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
  $http.get
  
})

.controller('SearchCtrl', function($scope,$rootScope,$http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});




         $scope.model = "";
                    $scope.clickedValueModel = "";
                    $scope.removedValueModel = "";

                    $scope.getTestItems = function (query) {
                        
                        var it = {items:[{"ID":238,"Name":"anxiety"},{"ID":104,"Name":"back pain"},{"ID":28,"Name":"blocked nose"},{"ID":75,"Name":"burning eyes"},{"ID":46,"Name":"burning in the throat"},{"ID":170,"Name":"cheek swelling"},{"ID":17,"Name":"chest pain"},{"ID":31,"Name":"chest tightness, oppressive feeling in the chest"},{"ID":139,"Name":"cold sweats"},{"ID":15,"Name":"cough"},{"ID":207,"Name":"dizziness, vertigo"},{"ID":273,"Name":"dry eyes"},{"ID":87,"Name":"earache"},{"ID":92,"Name":"early satiety"},{"ID":244,"Name":"eye lid, drooping (ptosis)"},{"ID":287,"Name":"eye pain"},{"ID":33,"Name":"eye redness"},{"ID":153,"Name":"fast, deepened breathing"},{"ID":76,"Name":"feeling of foreign body in the eye"},{"ID":11,"Name":"fever, temperature"},{"ID":57,"Name":"going black before the eyes, blackout"},{"ID":9,"Name":"headache"},{"ID":45,"Name":"heartburn"},{"ID":122,"Name":"hiccups"},{"ID":149,"Name":"hot flushes"},{"ID":40,"Name":"increased thirst"},{"ID":52,"Name":"insomnia, sleeplessness"},{"ID":73,"Name":"itching eyes"},{"ID":96,"Name":"itching, itch in the nose"},{"ID":211,"Name":"lacrimation, tears"},{"ID":35,"Name":"lip swelling"},{"ID":235,"Name":"memory gap"},{"ID":112,"Name":"menstruation disorder"},{"ID":123,"Name":"missed period"},{"ID":44,"Name":"nausea"},{"ID":136,"Name":"neck pain"},{"ID":114,"Name":"nervousness"},{"ID":133,"Name":"night cough"},{"ID":12,"Name":"pain in the limbs"},{"ID":203,"Name":"pain on swallowing"},{"ID":37,"Name":"palpitations"},{"ID":140,"Name":"paralysis"},{"ID":54,"Name":"reduced appetite"},{"ID":14,"Name":"runny nose"},{"ID":175,"Name":"shivering fit, ague, chills"},{"ID":29,"Name":"shortness of breath"},{"ID":124,"Name":"skin rash"},{"ID":95,"Name":"sneezing"},{"ID":13,"Name":"sore throat"},{"ID":64,"Name":"sputum"},{"ID":10,"Name":"stomach ache"},{"ID":179,"Name":"stomach burning"},{"ID":138,"Name":"sweating, perspiration"},{"ID":248,"Name":"swollen glands in the armpits"},{"ID":169,"Name":"swollen glands on the neck"},{"ID":16,"Name":"tiredness, fatigue"},{"ID":115,"Name":"tremor at rest"},{"ID":144,"Name":"unconsciousness (short), shock"},{"ID":101,"Name":"vomiting"},{"ID":181,"Name":"vomiting blood"},{"ID":56,"Name":"weakness "},{"ID":23,"Name":"weight gain"},{"ID":30,"Name":"wheezing"}]}
                        var mat = it.items.filter(function(x){

                          if(x.Name.startsWith(query)){
                             return x ;
                          }

                        });  
                          //console.log(mat);

                        if (query) {
                            return  {items:mat};
                            
                        }
                        return {items: []};
                    };

                    $scope.itemsClicked = function (callback) {
                        $scope.clickedValueModel = callback;
                    };
                    $scope.itemsRemoved = function (callback) {
                        $scope.removedValueModel = callback;
                    };
  $scope.search = function(symptoms){
  $scope.show = false;

    if(symptoms)
    {
        console.log(symptoms);
        var url = "https://sandbox-healthservice.priaid.ch/diagnosis";

        $http({
          url: url,
          method: 'GET',
          params: {
            'symptoms': JSON.stringify(symptoms),
            'gender': $rootScope.gender,
            'year_of_birth': $rootScope.birth_year,
            'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFwaW1lZGljQHByaWFpZC5jaCIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTU0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDAwLTAxLTAyIiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE0NjI5NzA5NzksIm5iZiI6MTQ2Mjk2Mzc3OX0.1HtbKH6eAGqwIzA0kKkVCZ4QrQptYCsYJxHjRgTTFDQ',
            'language':'en-gb',
            'format':'json' 
          }
        }).then(function(response){
          
          console.log(response.data);
          $scope.results = response.data;
        
          $scope.show = true;
        
          
        });
   }
  }

})

;