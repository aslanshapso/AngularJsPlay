(function () {
    'use strict';
  
    var app = angular.module('app');
  
    app.component('person', {
      // Binds caption to the parent scope
      bindings: {
        caption: '<'
      },
      // Loads the component template
      templateUrl: '/js/components/person/personComponent.html',
      controller: function () {
        
      }
    });
  })();