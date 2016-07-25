angular.module('EOL').controller('ConsultaConteinerController', ['$scope', '$http', '$modal', function ($scope, $http, $modal) {
    //Variaveis
    $scope.aNroConteiner = "";
    $scope.isVisible = false;
    $scope.parametro = "";

    $scope.pesquisar = function (dado) {
        console.log('NroConteiner: ' + dado);
        $scope.isVisible = true;
    }

    $scope.abrirModal = function () {
        $http.get('ConsultaConteiner/abrirModal?prParametro=' + $scope.parametro).then(function (data) {
            $modal.open({
                template: data.data,
                controller: 'ConsultaConteinerModalController',
                scope: $scope
            })
        }, function (error) {
            console.log(error);
        }) 
    }; 

}]) 
;
