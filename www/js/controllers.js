angular.module('starter.controllers', ['ionic'])

.controller('AppController', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('AnalyticsController', function($scope) {
  if (typeof analytics !== "undefined") {
    analytics.debugMode();
    analytics.startTrackerWithId("UA-40681711-2");
    analytics.trackView("Analytics Controller");
    console.log("Analytics Controller");
  }
})

.controller('PlatformCtrl', function($scope) {
  if(typeof analytics !== "undefined") {
    analytics.trackView("Acerca De Controller");
    console.log("Acerca De Controller");
  }

  cordova.getAppVersion(function (version) {
    $scope.appVersion = version;
  });
})

.controller('DashCtrl', function($scope, RestTracks, RestPonentes, RestNoticias, Noticias, RestPatrocinadores) {
  if(typeof analytics !== "undefined") {
    analytics.trackView("Dash Controller");
    console.log("Dash Controller");
  }

  $scope.Noticias = Noticias.all();

  $scope.doRefresh = function() {
    $scope.Noticias = Noticias.all();
    $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply();
  };
})

.controller('TracksCtrl', function($scope, Tracks) {
  if(typeof analytics !== "undefined") {
    analytics.trackView("Tracks Analytics");
  }

  $scope.Tracks = Tracks.all();

  $scope.doRefresh = function() {
    $scope.Tracks = Tracks.all();
    $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply();
  };
})

.controller('TracksDetailCtrl', function($scope, $stateParams, Tracks) {
  if(typeof analytics !== "undefined") {
    analytics.trackView("Detalles del Track" + $stateParams.TracksId);
    console.log("Detalles del Track" + $stateParams.TracksId);
  }

  $scope.Tracks = Tracks.get($stateParams.TracksId);
})

.controller('PonenciasTrackCtrl', function($scope, $stateParams, Tracks) {
  $scope.PonenciasTrack = Tracks.getPonencias($stateParams.TracksId);
})

.controller('PonentesCtrl', function($scope, Ponentes) {
  if(typeof analytics !== "undefined") {
    analytics.trackView("Ponentes Controller");
    console.log("Ponentes Controller");
  }

  $scope.Ponentes = Ponentes.all();

  $scope.doRefresh = function() {
    $scope.Ponentes = Ponentes.all();
    $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply();
  };
})

.controller('PonentesDetailCtrl', function($scope, $stateParams, Ponentes) {
  if(typeof analytics !== "undefined") {
    analytics.trackView("Detalles del Ponente" + $stateParams.PonentesId);
    console.log("Detalles del Ponente" + $stateParams.PonentesId);
  }

  $scope.Ponentes = Ponentes.get($stateParams.PonentesId);
})

.controller('PatrocinadoresCtrl', function($scope, Patrocinadores) {

  $scope.Patrocinadores = Patrocinadores.all();

  $scope.descripcion = function($id)
  {
    var elemento = document.getElementById($id);
    if(elemento.style.display=='block')
    {
      elemento.style.display='none';
    }
    else
    {
      elemento.style.display='block';
    }
  }
});