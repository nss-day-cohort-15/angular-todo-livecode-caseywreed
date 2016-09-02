"use strict";

app.controller("ItemEditCtrl", function ($scope, ItemStorage, $routeParams, $location) {

    $scope.editTask = {
        assignedTo: "",
        dependencies: "",
        dueDate: "",
        isCompleted: false,
        location: "",
        task: "",
        urgency: ""
    }

    $scope.editItem = function () {
        ItemStorage.getSingleItem($routeParams.itemId)
        .then(function (itemObject) {
            $scope.editTask = itemObject
        })
    }

    $scope.putItem = function () {
        ItemStorage.editItem($routeParams.itemId, $scope.editTask)
        .then( (response) => {
            $location.url("/items/list")
        })
    }

 $scope.editItem($routeParams.itemId)


})