angular.module('app').controller('app_blank', app_blank);
function app_blank($scope, app, $http) {
    'use strict';
    app.init($scope);
    
    $scope.getList = function (){
        alert($http);
    }
}
