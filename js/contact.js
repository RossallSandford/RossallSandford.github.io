// declare a module
var myApp = angular.module("myApp", []);

myApp.controller("contactController", function ($scope, $window) {
    $scope.mailWithLocation = function () {
        window.location.href = "mailto:rsandford@hotmail.co.uk?subject=hello&body=fggf";
    };
});
