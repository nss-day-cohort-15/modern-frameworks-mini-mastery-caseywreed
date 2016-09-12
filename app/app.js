"use strict";

var app = angular.module("PopQuiz", ["ngRoute"]);
app.constant("FirebaseURL", "https://flower-power-angular.firebaseio.com/");


app.config(function($routeProvider) {
    $routeProvider.
    when("/", {
        templateUrl: "partials/main.html",
        controller: "MainCtrl"
    })
});

