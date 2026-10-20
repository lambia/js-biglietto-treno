const inputChilometri = document.getElementById("chilometri");
const btnCalcola = document.getElementById("calcola");
const risultatoElement = document.getElementById("costo-biglietto");

btnCalcola.addEventListener("click", calcolaBiglietto);

function calcolaBiglietto() {
	const chilometri = inputChilometri.value;
	const tariffaBase = 0.21;

	const costoBiglietto = chilometri * tariffaBase;

	risultatoElement.innerText = `Costo del biglietto: ${costoBiglietto} €`;

	console.log("Costo: ", costoBiglietto);
}