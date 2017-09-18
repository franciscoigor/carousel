angular.module('app').controller('app_blank', app_blank);
function app_blank($scope, app, $http) {
    'use strict';
    app.init($scope);
    
    $scope.getList = function (){
        $http.get('http://sacnt1011.americas.ad.flextronics.com:7777/Carousel/GetAvailableCarousels').then(function(data){
            alert(data);
        });
    }
}
