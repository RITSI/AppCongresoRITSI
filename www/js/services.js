angular.module('starter.services', ['ionic', 'ngResource'])

    .factory('RestTracks', function($resource) {
       return $resource('http://jcabal.me:8080/api/tracks/all');
    })


    .factory('RestNoticias', function($resource) {
        return $resource('http://jcabal.me:8080/api/noticias/all');
    })

    .factory('RestPatrocinadores', function($resource) {
        return $resource('http://jcabal.me:8080/api/patrocinadores/all');

    })

    .factory('RestPonentes', function($resource) {
        return $resource('http://jcabal.me:8080/api/ponentes/all');
    })

    .factory('Tracks', function (RestTracks) {

        var Tracks;

        return {
            all: function () {
                Tracks = RestTracks.query();
                return Tracks;
            },
            get: function (TracksId) {
                for (var i = 0; i < Tracks.length; i++) {
                    if (Tracks[i].id === parseInt(TracksId)) {
                        return Tracks[i];
                    }
                }
                return null;
            },
            getPonencias: function (TracksId) {
                for (var i = 0; i < Tracks.length; i++) {
                    if (Tracks[i].id === parseInt(TracksId)) {
                        return Tracks[TracksId].ponencias;
                    }
                }
                return null;
            }
        }
    })

    .factory('Patrocinadores', function (RestPatrocinadores) {

        var Patrocinadores;

        return {
            all: function () {
                Patrocinadores = RestPatrocinadores.query();
                console.log(Patrocinadores);
                return Patrocinadores;
            }
        }
    })

    .factory('Noticias', function (RestNoticias) {

        var Noticias;

        return {
            all: function () {
                Noticias = RestNoticias.query();
                return Noticias;
            },
            get: function (NoticiasId) {
                for (var i = 0; i < Noticias.length; i++) {
                    if (Noticias[i].id === parseInt(NoticiasId)) {
                        return Noticias[i];
                    }
                }
                return null;
            }
        }
    })

    .factory('Ponentes', function (RestPonentes) {

        var Ponentes;

        return {
            all: function () {
                console.log('Check Ponentes', Ponentes);
                Ponentes = RestPonentes.query();
                return Ponentes;
            },
            get: function (PonentesId) {
                for (var i = 0; i < Ponentes.length; i++) {
                    if (Ponentes[i].id === parseInt(PonentesId)) {
                        return Ponentes[i];
                    }
                }
                return null;
            }
        }

    });


