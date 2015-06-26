Tableau de bord html 5 Css 3 et angularjs
===

J'ai réalisé quelques directives angularjs pour afficher les éléments d'un dashboard de domotique


##Les différentes directives crées : 

	<horloge></horloge>
Qui affiche l'horloge

	<date></date>
Qui affiche la date du jour

	<meteojour ville="grenoble" icones=icones></meteojour>
qui affiche la météo du jour, elle prend en  paramètre:      
-**ville** qui prend le nom de la ville qui sera passé en paramètre à la requete ajax vers openweathermap     
-**icones** qui prend comme valeur un tableau d'images pour la météo   

	<meteos ville="la murette" nbrjours="4" meteodujour="false" icones=icones></meteos>
 	
qui affiche la météo sur plusieurs jour, elle prend en paramètre :  
-**ville** qui prend le nom de la ville qui sera passé en paramètre à la requete ajax vers openweathermap  
-**nbrjours** pour justifier le nombre de jours à afficher de 0 à 15 jours  
-**meteodujour** pour afficher ou non la météo du jour    
-**icones** qui prend comme valeur un tableau d'images pour la météo    
 	

Rendu : http://labs.les-cles-informatiques.com/angularjs/