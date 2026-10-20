const inputChilometri = document.getElementById("chilometri");
const btnCalcola = document.getElementById("calcola");

btnCalcola.addEventListener("click", calcolaBiglietto);

function calcolaBiglietto() {
	console.log("Chilometri: ", inputChilometri.value);

	const costoBiglietto = inputChilometri.value * 0.21;

	console.log("Costo: ", costoBiglietto);
}