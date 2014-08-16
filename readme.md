#Tableau de bord html 5 Css 3 et angularjs
===

J'ai réalisé quelques directives angularjs pour afficher les éléments d'un dashboard de domotique


##Les différentes directives crées : 

 * ###horloge
 	affiche l'horloge

 * ###date
 	affiche la date du jour

 * ###meteojour 
  	Avec comme attribut 
 		+ville qui prend le nom de la ville qui sera passé en paramètre à la requete ajax vers openweathermap 
 		+icones qui prend comme valeur un tableau d'images pour la météo
 	Affiche la météo du jour
 			
 * ###meteos 
 	Avec comme attribut 
 		+ville qui prend le nom de la ville qui sera passé en paramètre à la requete ajax vers openweathermap 
		+nbrjours pour justifier le nombre de jours à afficher de 0 à 15 jours
		+meteodujour pour afficher ou non la météo du jour  
 		+icones qui prend comme valeur un tableau d'images pour la météo
 	Affiche la météo de la semaine
