const inputChilometri = document.getElementById("chilometri");
const btnCalcola = document.getElementById("calcola");
const risultatoElement = document.getElementById("costo-biglietto");
const selectFasciaEta = document.getElementById("fascia-eta");

btnCalcola.addEventListener("click", calcolaBiglietto);

function calcolaBiglietto() {
	// PREPARAZIONE
	const tariffaBase = 0.21;

	// INPUT
	const chilometri = inputChilometri.value;
	const tariffa = selectFasciaEta.value;

	// ELABORAZIONE: TARIFFA BASE
	const costoBigliettoIniziale = chilometri * tariffaBase;

	// ELABORAZIONE: PREZZO SCONTATO
	let costoBigliettoFinale = costoBigliettoIniziale;

	if (tariffa == "junior") {
		costoBigliettoFinale = costoBigliettoIniziale * 0.8;
	} else if (tariffa == "senior") {
		costoBigliettoFinale = costoBigliettoIniziale * 0.6;
	}

	// ELABORAZIONE: PREPARO IL MESSAGGIO PER L'UTENTE
	let msg = `Il costo del biglietto era ${costoBigliettoIniziale} € ma pagherai ${costoBigliettoFinale} €`;

	if (costoBigliettoIniziale == costoBigliettoFinale) {
		msg = `Il costo del biglietto è ${costoBigliettoFinale} €`;
	}

	// OUTPUT
	risultatoElement.innerText = msg;
}