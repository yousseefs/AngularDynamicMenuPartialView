//Inicializar o Modulo Principal o "Projeto".
//Modulo EOL que seria o "Projeto".
angular.module('EOL', ['ui.bootstrap']);
 
//angular.module('EOL.Controllers', []);

//Permitir Acesso de Frames de JavaScript...
angular.module('EOL').config(function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
}); 
 


