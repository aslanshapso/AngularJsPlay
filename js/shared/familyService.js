(function () {
    "use strict";
    var app = angular.module('app');

    app.factory('FamilyService', function () {

        var familyData = [{
            'person': 'Adam Jonh',
            'wife': 'Anna Neno',
            'parents': {
                'father': 'Ani Jonh',
                'mother': 'Nita Jonh'
            },
            'childrens': [{
                'name': 'first child'
            },
            { 'name': 'second child' },
            {
                'name': 'third child'
            }]
        },{
            'person': 'Adam Jonh',
            'wife': 'Anna Neno',
            'parents': {
                'father': 'Ani Jonh',
                'mother': 'Nita Jonh'
            },
            'childrens': [{
                'name': 'first child'
            },
            { 'name': 'second child' },
            {
                'name': 'third child'
            }]
        },{
            'person': 'Adam Jonh',
            'wife': 'Anna Neno',
            'parents': {
                'father': 'Ani Jonh',
                'mother': 'Nita Jonh'
            },
            'childrens': [{
                'name': 'first child'
            },
            { 'name': 'second child' },
            {
                'name': 'third child'
            }]
        },{
            'person': 'Adam Jonh',
            'wife': 'Anna Neno',
            'parents': {
                'father': 'Ani Jonh',
                'mother': 'Nita Jonh'
            },
            'childrens': [{
                'name': 'first child'
            },
            { 'name': 'second child' },
            {
                'name': 'third child'
            }]
        },{
            'person': 'Adam Jonh',
            'wife': 'Anna Neno',
            'parents': {
                'father': 'Ani Jonh',
                'mother': 'Nita Jonh'
            },
            'childrens': [{
                'name': 'first child'
            },
            { 'name': 'second child' },
            {
                'name': 'third child'
            }]
        },{
            'person': 'Adam Jonh',
            'wife': 'Anna Neno',
            'parents': {
                'father': 'Ani Jonh',
                'mother': 'Nita Jonh'
            },
            'childrens': [{
                'name': 'first child'
            },
            { 'name': 'second child' },
            {
                'name': 'third child'
            }]
        },{
            'person': 'Adam Jonh',
            'wife': 'Anna Neno',
            'parents': {
                'father': 'Ani Jonh',
                'mother': 'Nita Jonh'
            },
            'childrens': [{
                'name': 'first child'
            },
            { 'name': 'second child' },
            {
                'name': 'third child'
            }]
        },{
            'person': 'Adam Jonh',
            'wife': 'Anna Neno',
            'parents': {
                'father': 'Ani Jonh',
                'mother': 'Nita Jonh'
            },
            'childrens': [{
                'name': 'first child'
            },
            { 'name': 'second child' },
            {
                'name': 'third child'
            }]
        }];

        var getAllFamilyData = function () {
            return familyData;
        };

        var getFamilyByName = function (personName) {
            // if familyName is null, return
            if (!personName)
                return null;

            var tempFamily = _.find(familyData,{ person: personName });
            if (!tempFamily) {
                return null;
            }

            return tempFamily;
        };
        return {
            getAllFamilyData: getAllFamilyData,
            getFamilyByName: getFamilyByName,
        };
    });
})();