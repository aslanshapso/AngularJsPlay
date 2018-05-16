(function () {
    "use strict";
    var app = angular.module('app');

    var authorService = function ($http,$q, $timeout) {

        var getAllAuthors = function () {
            $http.get('http://localhost:3000/authors').then(function(response){
                console.log("getAllAuthors response ::",response);
            },function(err) {
                console.log("getAllAuthors err ::",err);
            });
        };
        var getAuthorById = function(id) {
            $http.get('http://localhost:3000/authors/' + id).then(function(response){
                console.log("getAuthorById response ::",response);
            },function(err) {
                console.log("getAuthorById err ::",err);
            });
        }
        var deleteAuthor = function(id) {
            $http.delete('http://localhost:3000/authors/' + id).then(function(response){
                console.log("deleteAuthor response ::",response);
            },function(err) {
                console.log("deleteAuthor err ::",err);
            });
        }
        
        var updateAuthor = function(id,body) {
            $http.put('http://localhost:3000/authors/' + id,body).then(function(response){
                console.log("updateAuthor response ::",response);
            },function(err) {
                console.log("updateAuthor err ::",err);
            });
        }
        
        var addNewAuthor = function(body) {
            $http.post('http://localhost:3000/authors',body).then(function(response){
                console.log("addNewAuthor response ::",response);
            },function(err) {
                console.log("addNewAuthor err ::",err);
            });
        }
        return {
            getAllAuthors: getAllAuthors,
            getAuthorById: getAuthorById,
            deleteAuthor: deleteAuthor,
            updateAuthor: updateAuthor,
            addNewAuthor: addNewAuthor
        };
    }

    app.factory('AuthorService', authorService);
})();