angular.module('EOL').controller('ConsultaConteinerModalController', ['$scope', '$http', '$modalInstance', function ($scope, $http, $modalInstance) {
    alert("Entrou no Controller da Modal... ;)");
     
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.fechar = function () {
        $modalInstance.dismiss('fechar');
    }; 
     
}])
;
 