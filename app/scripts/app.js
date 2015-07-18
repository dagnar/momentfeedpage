'use strict';

/**
 * @ngdoc overview
 * @name momentFeedPageApp
 * @description
 * # momentFeedPageApp
 *
 * Main module of the application.
 */
angular
  .module('momentFeedPageApp', [
    'ngAnimate',
    'ngRoute',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
