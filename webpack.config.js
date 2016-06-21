require('angular/angular.min');
const angular = window.angular;

var FirstApp = angular.module('FirstApp', []);
require('./app/js/first/controllers/FirstController')(FirstApp);
require('./app/js/first/directives/FirstDirective')(FirstApp);
