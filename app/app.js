"use strict";

//Two args: Name of Module, Array of Dependencies
var app = angular.module("TodoApp", [])

//Make a new controller on the App module
//Two args: Name, Function. Inject $scope into the function
app.controller("NavCtrl", function($scope){
    $scope.navItems = [
        {name: "Logout"},
        {name: "All Items"},
        {name: "New Items"}
    ]
})

app.controller("TodoCtrl", function($scope) {

    $scope.items = [
      {
        id: 0,
        task: "mow the lawn",
        isCompleted: false,
        dueDate: "12/5/17",
        assignedTo: "Greg",
        location: "Joe's house",
        urgency: "low",
        dependencies: "sunshine, clippers, hat, water, headphones"
      },
      {
        id: 1,
        task: "grade quizzes",
        isCompleted: false,
        dueDate: "12/5/15",
        assignedTo: "Christina",
        location: "NSS",
        urgency: "high",
        dependencies: "wifi, tissues, vodka"
      },
      {
        id: 2,
        task: "take a nap",
        isCompleted: false,
        dueDate: "5/21/16",
        assignedTo: "Joe",
        location: "Porch of lakefront cabin",
        urgency: "medium",
        dependencies: "hammock, silence"
      }
    ];


    //Handles the view
    $scope.showListView = true

    $scope.newItem = function () {
        $scope.showListView = false;
    }

    $scope.allItem = function () {
        $scope.showListView = true;
    }

    //Handles adding a new task item
    $scope.newTask = {}
    $scope.addNewItem = function () {
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length
        $scope.items.push($scope.newTask)
        $scope.newTask = {}
    }

})
