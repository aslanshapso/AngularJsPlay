(function () {
  'use strict';

  var app = angular.module('app');

  app.component('home', {
    // Binds caption to the parent scope
    bindings: {
      caption: '<'
    },
    // Loads the component template
    templateUrl: '/js/components/home/homeComponent.html',
    controller: function (ColorService, $interval,AuthorService) {
      var self = this;
      self.counter = 0;
      self.counter2 = 0;


      self.$onInit = function () {
        $interval(function () {
          ColorService.getCurrentColor().then(function (response) {
            self.displayColor = response.result;
            self.counter += 15;
            if(self.counter >= 800) {
              self.counter = 0;
            } 
          }, function (error) {
            self.displayColor = null;
          });
        }, 500);

        $interval(function () {
          ColorService.getCurrentColor().then(function (response) {
            self.displayColor2 = response.result;
            self.counter2 += 5;
            if(self.counter2 >= 800) {
              self.counter2 = 0;
            }
          }, function (error) {
            self.displayColor = null;
          });
        }, 500);

        
      };


    },
    controllerAs: 'homeCtrl',
  });
})();