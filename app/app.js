"use strict";

//Two args: Name of Module, Array of Dependencies
// Just like var ng-route = require("app/js/etc.js")
var app = angular.module("TodoApp", ["ngRoute"])
.constant("FirebaseURL", "https://angular-todo-fa439.firebaseio.com/")

// Adding to the config property of app
// Things to do BEFORE the app runs
app.config(function ($routeProvider) {
    $routeProvider.
    // Takes 2 args. Path and Object containing Template + Controller
    // Don't need to climb out of directory for files
    // because we're using the MODULES
        when("/", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when("/login", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when("/items/list", {
            templateUrl: "partials/item-list.html",
            controller: "ItemListCtrl"
        }).
        when("/items/new", {
            templateUrl: "partials/item-form.html",
            controller: "ItemNewCtrl"
        }).
        when("/items/view/:itemId", {
            templateUrl: "partials/item-details.html",
            controller: "ItemViewCtrl"
        }).
        when("/items/edit/:itemId", {
            templateUrl: "partials/item-edit-form.html",
            controller: "ItemEditCtrl"
        }).
        otherwise('/')
})

// App.Run is things to do right when the program is *Dixie Chicks voice* ready, ready, ready... ready to run

app.run( ($location, FBCreds) => {
    let creds = FBCreds
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    }
    firebase.initializeApp(authConfig)
})