angular.module('app').controller('app_blank', app_blank);
function app_blank($scope, app, $http) {
    'use strict';
    app.init($scope);
    
    $scope.getList = function (){
        $http.get('http://webapplication320170918045309.azurewebsites.net/api/values').then(function(data){
            alert(data);
        });
    }
}
