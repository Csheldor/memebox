angular.module('home.controller', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .when('','/shome');
    $stateProvider
      .state('tabs.home.shome',{
        url: '/shome',
        templateUrl: './tpls/home/home-shome.html'
      })
      .state('tabs.home.china',{
        url: '/china',
        templateUrl: './tpls/home/home-china.html'
      })
      .state('tabs.home.week',{
        url: '/week',
        templateUrl: './tpls/home/home-week.html'
      })
      .state('tabs.home.mask',{
        url: '/mask',
        templateUrl: './tpls/home/home-mask.html'
      })
      .state('tabs.home.korea',{
        url: '/korea',
        templateUrl: './tpls/home/home-korea.html'
      })
      .state('tabs.home.makeup',{
        url: '/makeup',
        templateUrl: './tpls/home/home-makeup.html'
      })
      .state('tabs.home.beamakeup',{
        url: '/beamakeup',
        templateUrl: './tpls/home/home-beamakeup.html'
      });
})

.controller('homeController', ['$scope', function ($scope) {

}])
