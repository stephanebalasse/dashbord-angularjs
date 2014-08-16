Tableau de bord html 5 Css 3 et angularjs
===

J'ai réalisé quelques directives angularjs pour afficher les éléments d'un dashboard de domotique


Les différentes directives crées : 

 * <horloge></horloge>

 * <date></date>

 * <meteojour ville="grenoble" icones=icones></meteojour>
  	Avec comme attribut 
 		ville qui prend le nom de la ville qui sera passé en paramètre à la requete ajax vers openweathermap 
 		icones qui prend comme valeur un tableau d'images pour la météo
 			par ex : 
 				    $scope.icones = {
				            "01d": "soleil.png",
				            "01n": "lune.png",
				            "02d": "soleil+grosnuage.png",
				            "02n": "lune+grosnuage.png",
				            "03d": "soleil+legernuage.png",
				            "03n": "lune+legernuage.png",
				            "04n": "nuageux.png",
				            "04d": "nuageux.png",
				            "09d": "pluie.png",
				            "09n": "pluie.png",
				            "10d": "soleil+pluie.png",
				            "10n": "lune+pluie.png",
				            "11d": "orage.png",
				            "11n": "orage.png",
				            "13d": "neige.png",
				            "13n": "neige.png",
				            "50d": "brouillard.png",
				            "50n": "brouillard.png"
				    };

 * <meteos ville="grenoble" nbrjours="4" meteodujour="false" icones=icones></meteos>
 	Avec comme attribut 
 		ville qui prend le nom de la ville qui sera passé en paramètre à la requete ajax vers openweathermap 
		nbrjours pour justifier le nombre de jours à afficher de 0 à 15 jours
		meteodujour pour afficher ou non la météo du jour  
 		icones qui prend comme valeur un tableau d'images pour la météo
 			par ex : 
 				    $scope.icones = {
				            "01d": "soleil.png",
				            "01n": "lune.png",
				            "02d": "soleil+grosnuage.png",
				            "02n": "lune+grosnuage.png",
				            "03d": "soleil+legernuage.png",
				            "03n": "lune+legernuage.png",
				            "04n": "nuageux.png",
				            "04d": "nuageux.png",
				            "09d": "pluie.png",
				            "09n": "pluie.png",
				            "10d": "soleil+pluie.png",
				            "10n": "lune+pluie.png",
				            "11d": "orage.png",
				            "11n": "orage.png",
				            "13d": "neige.png",
				            "13n": "neige.png",
				            "50d": "brouillard.png",
				            "50n": "brouillard.png"
				    };		