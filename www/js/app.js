
angular.module('starter', ['ionic', 'home.controller', 'memebox.controller', 'kinds.controller', 'cart.controller', 'my.controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tab',
      templateUrl: './tpls/tabs.html',
      //controller: 'tabController'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: './tpls/home.html',
          controller: 'home.controller'
        }
      }
    })
    .state('tabs.memebox', {
      url: '/memebox',
      views: {
        'memebox-tab': {
          templateUrl: './tpls/memebox.html',
          controller: 'memeboxController'
        }
      }
    })
    .state('tabs.kinds', {
      url: '/kinds',
      views: {
        'kinds-tab': {
          templateUrl: './tpls/kinds.html',
          controller: 'kindsController'
        }
      }
    })
    .state('tabs.cart', {
      url: '/cart',
      views: {
        'cart-tab': {
          templateUrl: './tpls/cart.html',
          controller: 'cartController'
        }
      }
    })
    .state('tabs.my', {
      url: '/my',
      views: {
        'my-tab': {
          templateUrl: './tpls/my.html',
          controller: 'myController'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/home/shome');
});
