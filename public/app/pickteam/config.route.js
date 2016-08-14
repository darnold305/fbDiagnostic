(function(){
  'use strict'
  
  angular
    .module('app.pickTeam')
    .config(configFunction)
  
  configFunction.$inject = ['$routeProvider']
  
  function configFunction($routeProvider){
    $routeProvider.when('/pickteam',{
      templateUrl: 'app/pickteam/pickteam.html',
      controller: 'PickTeamController',
      controllerAs: 'vm'
    });
  }
  
  
})();