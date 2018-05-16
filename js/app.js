(function() {
    var app =  angular.module('app', ['ui.router']);
    // A controller that displays hello world
     app.controller('HomeCtrl', function() {
        this.message = "Hello, world";
     });

     app.config(function($stateProvider) {
  

        var homeState = {
          name: 'home',
          url: '/home',
          template: '<home></home>'
        }
      
        var familyState = {
          name: 'family',
          url: '/family',
          template: '<family></family>'

        }
        var personState = {
          name: 'person',
          url: '/person',
          template: '<person></person>'

        }

        var userState = {
            name: 'user',
            url: '/user',
            template: '<user-info name="\'Users Table\'"></user-info>'
          }
      

       
        $stateProvider.state(homeState);
        $stateProvider.state(familyState);
        $stateProvider.state(personState);
        $stateProvider.state(userState);


      });
   })();

