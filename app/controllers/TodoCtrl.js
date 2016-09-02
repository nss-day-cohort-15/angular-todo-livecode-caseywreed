// "use strict";

// THIS IS NOT BEING USED ANYMORE
// // But we're keeping it around to learn from later

// app.controller("TodoCtrl", function ($scope, $location) {

//     //Handles the view
//     $scope.showListView = true

//     $scope.newItem = function () {
//         $location.url("/items/new")
//     }

//     $scope.allItem = function () {
//         $location.url("/items/list")
//     }

//     //Handles adding a new task item
//     $scope.newTask = {}
//     $scope.addNewItem = function () {
//         $scope.newTask.isCompleted = false;
//         $scope.newTask.id = $scope.items.length
//         $scope.items.push($scope.newTask)
//         $scope.newTask = {}
//     }

// })