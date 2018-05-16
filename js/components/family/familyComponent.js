(function () {
    'use strict';
  
    var app = angular.module('app');
  
    app.component('family', {
      
      // Binds caption to the parent scope
      bindings: {
        caption: '<'
      },
      // Loads the component template
      templateUrl: '/js/components/family/familyComponent.html',
      controller: function (FamilyService) {
        var self = this;

      
        self.$onInit = function () {
          self.getFamilyData();
          self.getFamilyByName();
        };
        self.getFamilyData = function() {
          self.familyData = FamilyService.getAllFamilyData();
        }
        self.getFamilyByName = function() {
          self.familyByName = FamilyService.getFamilyByName('Adam Jonh');
          console.log('familyByName ::',self.familyByName);
        }
      },
      controllerAs: 'familyCtrl'
    });
  })();