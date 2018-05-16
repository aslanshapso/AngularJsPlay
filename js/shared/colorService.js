(function () {
    "use strict";
    var app = angular.module('app');

    var colorService = function ($q, $timeout) {

        var getRandomColor = function () {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }


        var getCurrentColor = function () {
            return $q((resolve, reject) => {
                var tempColor = getRandomColor();
                if (tempColor) {
                    resolve({ 'message': 'Success!', result: tempColor });
                } else {
                    reject({ 'message': 'Oops... something went wrong!', result: null });
                }

            });
        };
        return {
            getCurrentColor: getCurrentColor,
        };
    }

    app.factory('ColorService', colorService);
})();