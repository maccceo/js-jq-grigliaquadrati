// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// 1 - Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti;
// 2 - generazione dinamica,  random,  della griglia (anche qui potrei scomporre in 2 problemi, prima mi preoccupo di come generala da js e poi in caso, come rendere random la distribuzione dei rettangoli rossi).
var redCounter = 0, greenCounter = 0;
var redScoreboard = $("#redScoreboard");
var greenScoreboard = $("#greenScoreboard");


// aspetto che il documento sia stato caricato interamente
$(document).ready(function() {

	//azione al click di un quadratino
	$('.quadratino').click(function() {

		//controllo se il quadratino va colorato di rosso
		if ($(this).attr('rosso') === 'true') {
			$(this).addClass("rosso");
			redCounter++;
			redScoreboard.text(redCounter);
		}

		//altrimenti coloro di verde
		else {
			$(this).addClass("verde");
			greenCounter++;
			greenScoreboard.text(greenCounter);
		}
	});
});