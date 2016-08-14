(function(){
  'use strict';
  
  angular
  .module('app',[
  
  //Angular Modules
  'ngRoute',
  
  //Third Party Modules
  'firebase',
    
  //Custom Modules
  'app.landing',
  'app.pickTeam',
  'app.diag1',
  'app.diag2',
  'app.diag3',
  'app.gameServices'
  ]);
  
})()
