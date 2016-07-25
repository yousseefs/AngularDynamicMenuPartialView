﻿//Controlador da criação de Menus
angular.module('EOL').controller('menuController', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    $scope.Menu = [];
    
    //Pega no Controller pelo Banco e popula no Html...
    $http.get('/home/GetSiteMenu').then(function (data) {
        $scope.Menu = data.data;
    }, function (error) {
        alert('Error');
    })

    //Buscar no Controller as PartialViews...
    $scope.buscarController = function (dado) {
        $scope.PartialView = "";
        
        $http.post(dado + '/Index').then(function (data) {
            $scope.PartialView = data.data; 
        }, function (error) {
            console.log(error);
        }) 
    }
}])
;
