// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('RITSICongresos', ['ionic', 'starter.controllers', 'starter.services'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.Tracks', {
      url: '/Tracks',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-Tracks.html',
          controller: 'TracksCtrl'
        }
      }
    })
    .state('tab.Tracks-detail', {
      url: '/Tracks/:TracksId',
      views: {
        'menuContent': {
          templateUrl: 'templates/Tracks-detail.html',
          controller: 'TracksDetailCtrl'
        }
      }
    })

  .state('tab.Ponentes', {
      url: '/Ponentes',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-Ponentes.html',
          controller: 'PonentesCtrl'
        }
      }
    })
    .state('tab.Ponentes-detail', {
      url: '/Ponentes/:PonentesId',
      views: {
        'menuContent': {
          templateUrl: 'templates/Ponentes-detail.html',
          controller: 'PonentesDetailCtrl'
        }
      }
    })

  .state('tab.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-about.html',
        controller: 'PlatformCtrl'
      }
    }
  })

  .state('tab.Patrocinadores', {
    url: '/Patrocinadores',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-Patrocinadores.html',
        controller: 'PatrocinadoresCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
