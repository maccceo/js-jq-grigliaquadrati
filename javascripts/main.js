// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

// aspetto che il documento sia stato caricato interamente
$(document).ready(function() {

	//azione al click di un quadratino
	$('.quadratino').click(function() {

		//controllo se il quadratino va colorato di rosso
		if ($(this).attr('rosso') === 'true') {
			$(this).addClass("rosso");
		}

		//altrimenti coloro di verde
		else {
			$(this).addClass("verde");
		}
	});
});