import angular from 'angular';

import '../style/app.css';

let myDirective = () => { //arrow function //function() {...}
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

/*
const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);
*/

var app1 = angular.module("app", [])
  app1.directive('myDirective', myDirective)
  app1.controller('AppCtrl', AppCtrl);


export default MODULE_NAME;