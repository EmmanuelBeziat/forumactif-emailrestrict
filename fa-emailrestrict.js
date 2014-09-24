/**
 * Nom: emailrestrict
 * Version: 1.0
 * Description: Permet de restreindre les emails à l'inscription, en bloquant certains domaines
 * Auteur: Emmanuel "Manumanu" B
 * GitHub: https://github.com/RhooManu/forumactif-emailrestrict
 */

/**
 * Fonction principale
 * @return {[function]}           [Fonction Init]
 */
var emailrestrict = (function($, undefined) {
	"use strict";

	/**
	 * Vérifie si une adresse email correspond à un domaine restreint
	 * @param  {string} sEmail    [adresse email entrée par l'utilisateur]
	 * @param  {array} aDomaines [domaines restreints]
	 * @return {bool}           [renvoie true si l'email correspond à un domaine]
	 */
	var validerEmail = function(sEmail, aDomaines) {
		var aSplit = sEmail.split("@");

		for (var sDomaine in aDomaines) {
			if (aSplit[1] === aDomaines[sDomaine]) {
				alert('Les adresses de type "'+ aDomaines[sDomaine] +'" ne sont pas autorisées.');
				return true;
			}
		}

		return false;
	};
	
	/**
	 * Initialisation du script
	 */
	var init = function(aDomaines) {

		var $Formulaire = $("#form_register"),
			$FormulaireEmail = $Formulaire.find("#email");

		$Formulaire.on("submit", function(event) {
			if (validerEmail($FormulaireEmail.val(), aDomaines)) {
				event.preventDefault();
			}
		});
	};

	/**
	 * Appel de l'initialisation
	 */
	return {
		init: init
	};

})(jQuery);

/**
 * Attend le chargement complet de la page (et non du DOM)
 * pour permettre le chargement préalable de l'éditeur JS
 */
$(document).ready(function() {

	// Lancer le script
	emailrestrict.init([
		'gmail.com',
		'mail.com',
		'voila.fr',
		'yahoo.com'
	]);
});