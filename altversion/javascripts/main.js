// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// 1 - Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti;
// 2 - generazione dinamica,  random,  della griglia (anche qui potrei scomporre in 2 problemi, prima mi preoccupo di come generala da js e poi in caso, come rendere random la distribuzione dei rettangoli rossi).
var redCounter = 0, greenCounter = 0;
var redSquares = squaresGenerator(15, 64);
var row, remainder, position, found = false;
console.log(redSquares);

// aspetto che il documento sia stato caricato interamente
$(document).ready(function() {
	// vittoria();
	//azione al click di un quadratino
	$('.quadratino').click(function() {
		//ricavo posizione numerica del quadrato (1-64)
		row = parseInt( $(this).attr('riga') );
		remainder = parseInt( $(this).attr('resto') );
		position = row * 8 + remainder;

		//controllo se è un quadratino rosso
		for (var i = 0; i < redSquares.length; i++) {
			if (position === redSquares[i]) {
				found = true;
			}
		}

		//coloro opportunamente il quadratino
		if (found) {
			$(this).addClass("rosso");
			redCounter++;
			//se hai vinto sigla finale
			if(redCounter == 15) {
				vittoria();
			}
			//..altrimenti visualizza punteggio
			$("#redScoreboard").text(redCounter);
			found = false;
		} else {
			$(this).addClass("verde");
			//visualizzo il punteggio
			greenCounter++;
			$("#greenScoreboard").text(greenCounter);
		}
	});
});


// # # FUNZIONI # #
function squaresGenerator(howMany, maxValue) {
	var numGenerated, array = [];

	for (var i = 1; i < howMany; i++) {
		//genero un numero
		numGenerated = Math.floor(Math.random() * maxValue + 1);
		//controllo che non sia già stato generato in precedenza
		for (var i = 0; i < array.length; i++) {
				if (array[i] === numGenerated) {
					numGenerated = Math.floor(Math.random() * maxValue + 1);
					// ricontrollo da capo per evitare che il numero nuovo sia uguale a uno precedente
					i = -1;
				}
			}
		//pusho il numero generato (sicuramente non doppio) nell'array
		array.push(numGenerated)
	}
	//ordino per comodità, non necessario
	array = array.sort();
	return array;
}

function vittoria() {
	// posizione dei colori che formano l'immagine della vittoria
	var giallo = [11,12,13,14,15,19,20,21,22,23,28,29,30,37,45,52,53,54];
	var gialloScuro = [10,18,27,36,44,51];
	var bluScuro = [49,50,55,56,57,58,59,60,61,62,63,64];
	var bluMenoScuro = [33,34,35,38,39,40,41,42,43,46,47,48];
	var bluMenoChiaro = [17,24,25,26,31,32];
	var bluChiaro = [1,2,3,4,5,6,7,8,9,16];

	// inietto i colori nei quadrati 
	colora(giallo, "giallo");
	colora(gialloScuro, "gialloScuro");
	colora(bluScuro, "bluScuro");
	colora(bluMenoScuro, "bluMenoScuro");
	colora(bluMenoChiaro, "bluMenoChiaro");
	colora(bluChiaro, "bluChiaro");

	// avviso il giocatore che ha vinto
	$("h1").text('Hai vinto!');
	$("h3").show();

	function colora (colore, coloreString) {
		var row, remainder, position;
		for (var i = 0; i < colore.length; i++) {
			row = Math.floor(colore[i] / 8);
			remainder = colore[i] % 8;
			if(remainder==0) {
				remainder = 8;
				row--;
			}
			$(`[resto='${remainder}'][riga='${row}']`).addClass(coloreString);
		}
	}
}