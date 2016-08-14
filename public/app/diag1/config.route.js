(function(){
  'use strict'
  
  angular
    .module('app.diag1')
    .config(configFunction)
  
  configFunction.$inject = ['$routeProvider']
  
  function configFunction($routeProvider){
    $routeProvider.when('/diagnostic/one', {
      templateUrl: 'app/diag1/diag1.html',
      controller: "Diag1Controller",
      controllerAs: "vm"
    });
  }
  
  
})();