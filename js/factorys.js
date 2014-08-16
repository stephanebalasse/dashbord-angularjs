app.factory('MeteoJ', ["$http", "$q",
    function($http, $q) {
        var factory = {
            meteoJ: {},
            getMeteoJ: function(ville) {
                var deferred = $q.defer();
                $http.get('http://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        q: ville, // Les donnees que l'on souhaite envoyer au serveur au format JSON
                        mode: 'json',
                        units: 'metric',
                        lang: 'fr',
                    }
                }).success(function(data, status) {
                    factory.meteoJ = data;
                    deferred.resolve(factory.meteoJ);
                }).error(function(data, status) {
                    deferred.reject('Impossible de récuperrer la méteo');
                });
                return deferred.promise;
            }
        };
        return factory;
    }
]);


app.factory('Meteo', ["$http", "$q",
    function($http, $q) {
        var factory = {
            meteo: {},
            getMeteo: function(ville, nbrJ) {
                var deferred = $q.defer();
                $http.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
                    params: {
                        q: ville, // Les donnees que l'on souhaite envoyer au serveur au format JSON
                        mode: 'json',
                        units: 'metric',
                        cnt: nbrJ,
                        lang: 'fr'
                    }
                }).success(function(data, status) {
                    factory.meteo = data;
                    deferred.resolve(factory.meteo);
                }).error(function(data, status) {;
                    deferred.reject('Impossible de récuperrer la méteo');
                });
                return deferred.promise;
            }
        };
        return factory;
    }
]);