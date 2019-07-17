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
			//visualizzo il punteggio
			redCounter++;
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