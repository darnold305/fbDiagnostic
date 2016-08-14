(function(){
  'use strict'
  
  angular
    .module('app.diag3')
    .config(configFunction)
  
  configFunction.$inject = ['$routeProvider']
  
  function configFunction($routeProvider){
    $routeProvider.when('/diagnostic/three', {
      templateUrl: 'app/diag3/diag3.html',
      controller: "Diag3Controller",
      controllerAs: "vm"
    });
  }
  
  
})();