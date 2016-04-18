angular.module('starter.services', [])
.factory("DashboardData", function($http){

  var u = [{
    id: 0,
    name: 'b',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {

    get: function(user){  for(var i in u){
                            //console.log("loop: "+ i);
                            if(u[i]['name']== user)
                              return u[i];
                          }

    }

    
  };
});
