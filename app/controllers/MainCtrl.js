"use strict";

app.controller("MainCtrl", function ($scope, MainFactory) {

    $scope.arrangementArray = []

    $scope.getFlowers = () => {
        MainFactory.getFlowersFromFirebase()
        .then(function (data) {
            let collection = data.data
            console.log("collection", collection)
            for (let obj in collection) {
                $scope.arrangementArray.push(collection[obj])
            }
        console.log("$scope.arrangements", $scope.arrangements)
        })
    }

})