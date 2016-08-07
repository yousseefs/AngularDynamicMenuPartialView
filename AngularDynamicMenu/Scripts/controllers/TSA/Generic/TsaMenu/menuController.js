//Controlador da criação de Menus
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
        if (dado != "") {
            $http.post(dado + '/Index').then(function (data) {
                $scope.PartialView = data.data;
            }, function (error) {
                console.log(error);
            })
        }
    } 
    
   // $scope.class = "nav nav-second-level collapse";
    $scope.selectedIndex;
    $scope.changeClass = function ($index)
    { 
        $scope.selectedIndex = $index;
       /* if ($scope.class === "nav nav-second-level collapse")
        {
            $scope.class = "nav nav-second-level collapse in";
            
        }
        else
        {
            $scope.class = "nav nav-second-level collapse";
            $scope.selectedIndex = $index;
        }*/
    }; 
}])
;
