(function(){
  'use strict'
  
  angular
    .module('app.diag1')
    .config(configFunction)
  
  configFunction.$inject = ['$routeProvider']
  
  function configFunction($routeProvider){
    $routeProvider.when('/diagnostic/two', {
      templateUrl: 'app/diag2/diag2.html',
      controller: "Diag2Controller",
      controllerAs: "vm"
    });
  }
  
  
})();