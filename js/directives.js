/*------------------------------------*\
    directive horloge
\*------------------------------------*/


app.directive('horloge', ["dateFilter", "$interval",
    function(dateFilter, $interval) {
        return {
            restrict: 'E',
            templateUrl: 'partials/directives/horloge.html',
            replace: false,
            scope: {},
            link: function(scope, element, attrs) {
                scope.flag = false;
                var maDate = new Date();
                scope.heure = dateFilter(maDate, 'HH');
                scope.minute = dateFilter(maDate, 'mm');

                element.on('$destroy', function() {
                    $interval.cancel('interval');
                });

                interval = $interval(function() {
                    if (scope.flag == false) {
                        scope.flag = true;
                    } else {
                        scope.flag = false;
                    }
                    var maDate = new Date();
                    scope.heure = dateFilter(maDate, 'HH');
                    scope.minute = dateFilter(maDate, 'mm');
                }, 1000); //appelle de la fonction toute les secondes

            }
        }
    }
]);

/*------------------------------------*\
    directive date
\*------------------------------------*/


app.directive('date', ["dateFilter", "$interval",
    function(dateFilter, $interval) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'partials/directives/date.html',
            link: function(scope, element, attrs) {

                var date = new Date();
                scope.jourL = dateFilter(date, 'EEE');
                scope.jour = dateFilter(date, 'dd');
                scope.mois = dateFilter(date, 'MMMM');
                scope.annee = dateFilter(date, 'yyyy');

                element.on('$destroy', function() {
                    $interval.cancel('interval');
                })

                interval = $interval(function() {
                    var date = new Date();
                    scope.jourL = dateFilter(date, 'EEE');
                    scope.jour = dateFilter(date, 'dd');
                    scope.mois = dateFilter(date, 'MMMM');
                    scope.annee = dateFilter(date, 'yyyy');
                }, 60000); //appelle de la fonction toute les heures 

            }
        }
    }
]);

/*------------------------------------*\
    directive meteo du jour
\*------------------------------------*/


app.directive('meteojour', ["dateFilter", "$interval", "MeteoJ",
    function(dateFilter, $interval, MeteoJ) {
        return {
            restrict: 'E',
            scope: {
                ville: '@ville',
                icones: '='
            },
            templateUrl: 'partials/directives/meteoDuJour.html',
            link: function(scope, element, attrs) {
                scope.meteoJ = {};
                var promise = MeteoJ.getMeteoJ(scope.ville);

                promise.then(function(MeteoJ) {
                    scope.meteoJ = MeteoJ;
                });

                interval = $interval(function() {
                    scope.meteoJ = {};
                    var promise = MeteoJ.getMeteoJ(scope.ville);

                    promise.then(function(MeteoJ) {
                        scope.meteoJ = MeteoJ;
                    });
                }, 60000); //appelle de la fonction toute les heures 


            }
        }
    }
]);


/*------------------------------------*\
    directive meteo des jours apres
\*------------------------------------*/


app.directive('meteos', ["dateFilter", "$interval", "Meteo",
    function(dateFilter, $interval, Meteo) {
        return {
            restrict: 'E',
            scope: {
                nbrjours: '@nbrjours',
                ville: '@ville',
                meteodujour: '=meteodujour',
                icones: '='
            },
            templateUrl: 'partials/directives/meteos.html',
            link: function(scope, element, attrs) {

                if (scope.meteodujour == false) {
                    scope.nbrjours++;
                }
                var promise = Meteo.getMeteo(scope.ville, scope.nbrjours);

                promise.then(function(Meteo) {

                    scope.meteos = Meteo;

                    if (scope.meteodujour == false) {
                        Meteo.list.splice(0, 1);
                    }

                });

                interval = $interval(function() {
                    if (scope.meteodujour == false) {
                        scope.nbrjours++;
                    }
                    var promise = Meteo.getMeteo(scope.ville, scope.nbrjours);

                    promise.then(function(Meteo) {

                        scope.meteos = Meteo;

                        if (scope.meteodujour == false) {
                            Meteo.list.splice(0, 1);
                        }

                    });
                }, 60000); //appelle de la fonction toute les heures 

            }
        }
    }
]);