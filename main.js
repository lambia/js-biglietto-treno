const inputChilometri = document.getElementById("chilometri");
const btnCalcola = document.getElementById("calcola");
const risultatoElement = document.getElementById("costo-biglietto");
const selectFasciaEta = document.getElementById("fascia-eta");
const formElement = document.getElementById("biglietto-form");

// btnCalcola.addEventListener("click", calcolaBiglietto);
formElement.addEventListener("submit", calcolaBiglietto);

function calcolaBiglietto(event) {
	event.preventDefault();
	// PREPARAZIONE
	const tariffaBase = 0.21;

	// INPUT
	const chilometri = Number(inputChilometri.value);
	const tariffa = selectFasciaEta.value;

	if (inputChilometri.value == "" || isNaN(chilometri)) {
		risultatoElement.innerText = "Si è verificato un errore";
		return;
	}

	// ELABORAZIONE: TARIFFA BASE
	let costoBigliettoIniziale = chilometri * tariffaBase;

	// ELABORAZIONE: PREZZO SCONTATO
	let costoBigliettoFinale = costoBigliettoIniziale;

	if (tariffa == "junior") {
		costoBigliettoFinale = costoBigliettoIniziale * 0.8;
	} else if (tariffa == "senior") {
		costoBigliettoFinale = costoBigliettoIniziale * 0.6;
	}

	// ELABORAZIONE: ARROTONDO I PREZZI
	costoBigliettoIniziale = costoBigliettoIniziale.toFixed(2);
	costoBigliettoFinale = costoBigliettoFinale.toFixed(2);

	// ELABORAZIONE: PREPARO IL MESSAGGIO PER L'UTENTE
	let msg = `Il costo del biglietto era ${costoBigliettoIniziale} € ma pagherai ${costoBigliettoFinale} €`;

	if (costoBigliettoIniziale == costoBigliettoFinale) {
		msg = `Il costo del biglietto è ${costoBigliettoFinale} €`;
	}

	// OUTPUT
	risultatoElement.innerText = msg;
}