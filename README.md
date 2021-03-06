script messageSaver pour ForumActif
=======================

Si vous avez l'envie étrange de restreindre des adresses email par domaines à l'inscription de vos membres (par exemple, interdire les adresses en *@gmail.com*), alors ce plugin est fait pour vous.

# Comment l'installer

1. Il suffit d'aller dans votre espace d'administration, Modules → HTML & Javascript → Gestion des codes Javascript.
2. Assurez-vous que "Activer la gestion des codes Javascript" est bien actif, puis cliquez sur "Créer un nouveau javascript".
3. Dans la nouvelle fenêtre, copiez-collez simplement ce code, tel quel :
```javascript
var emailrestrict=function(r,i){"use strict";var t=function(r,i){var t=r.split("@");for(var e in i)if(t[1]===i[e])return alert('Les adresses de type "'+i[e]+'" ne sont pas autorisées.'),!0;return!1},e=function(i){var e=r("#form_register"),n=e.find("#email");e.on("submit",function(r){t(n.val(),i)&&r.preventDefault()})};return{init:e}}(jQuery);

$(function() {
	emailrestrict.init([
		// La liste
		'gmail.com',
		'mail.com',
		'voila.fr',
		'yahoo.com'
	]);
});
```

C'est à vous de remplacer / ajouter / supprimer des domaines dans la liste prévue à cet effet ; mettez chaque domaine entre guillemets et en séparant chaque domaine par une virgule.

Validez, et c'est tout !

## Une note sur la fiabilité

Le javascript peut être désactivé par un utilisateur, et donc rendre cette vérification totalement inopérante.

## Une note sur la compatibilité

Ce script ne fonctionne pour l'instant que sur un forum phpBB2 (et éventuellement Invision, mais il faut que je teste).

# Évolutions

Si vous avez d'autres fonctionnalités en tête, faites-le moi savoir.

Si vous êtes développeur JS et que vous souhaitez voir le code pour l'adapter à vos besoin ou travailler dessus et proposer des ajouts ou autres améliorations, vous pouvez *forker*.

**Enjoy !**