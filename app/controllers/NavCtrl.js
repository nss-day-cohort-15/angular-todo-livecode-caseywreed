"use strict";

//Make a new controller on the App module
//Two args: Name, Function. Inject $scope into the function
app.controller("NavCtrl", function($scope, SearchTermData, $location){
    $scope.searchText = SearchTermData
    $scope.navItems = [
        {url: "#/logout", name: "Logout"},
        {url: "#/items/list", name: "All Items"},
        {url: "#/items/new", name: "New Items"}
    ]

    $scope.isActive = (viewLocation) => viewLocation === $location.path()

})