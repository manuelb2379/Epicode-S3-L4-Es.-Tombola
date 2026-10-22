/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti


/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/

const ultimoNumero = document.getElementById("ultimo-numero");
const cronologia = document.getElementById("cronologia");
const tabellone = document.getElementById("tabellone");
const btnEstrai = document.getElementById("estrai");
const btnReset = document.getElementById("reset");

let estratti = [];

function rendiTabellone() {
  tabellone.innerHTML = '';
  for (let i = 1; i <= 90; i++) {
    const cella = document.createElement('div');
    cella.classList.add('numero');
    cella.id = "numero-" + i;
    cella.textContent = i;
    tabellone.appendChild(cella);
  }

}

rendiTabellone();

