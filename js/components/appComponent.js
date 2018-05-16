(function () {
    'use strict';
    var app = angular.module('app');

    app.component('menuBar', {
        // defines a two way binding in and out of the component
        bindings: {
            brand: '<'
        },
        // Load the template
        templateUrl: '/js/components/appComponent.html',
        controller: function () {
            // A list of menus
            this.menu = [{
                name: "Home",
                component: "home"
            },{
                name: "Family",
                component: "family"
            },
            {
                name: "Person",
                component: "person"
            },{
                name: "User",
                component: "user"
            }, ];
        }
    });
})();