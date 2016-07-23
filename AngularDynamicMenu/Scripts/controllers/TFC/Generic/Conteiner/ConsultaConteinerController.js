angular.module('EOL').controller('ConsultaConteinerController', ['$scope', '$http', function ($scope, $http) {
    //Variaveis
    $scope.aNroConteiner = "";
    $scope.isVisible = false;
    
    $scope.pesquisar = function (dado) {
        console.log('NroConteiner: ' + dado);
        $scope.isVisible = true;
    }
}]) 
;
