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

let estratti = [];    // numeri già usciti (l'ultimo estratto è sempre il primo)
let disponibili = []; // numeri ancora da estrarre

// CREA IL TABELLONE
function rendiTabellone() {
  tabellone.innerHTML = '';  // svuota il tabellone
  disponibili = [];          // azzera i numeri disponibili 

  for (let i = 1; i <= 90; i++) {
    const cella = document.createElement('div'); // crea una cella
    cella.classList.add('numero');               // le dà lo stile base
    cella.id = 'numero-' + i;                    // id per ritrovarla (es. numero-73)
    cella.textContent = i;                       // scrive il numero dentro
    tabellone.appendChild(cella);                // la aggiunge alla griglia
    disponibili.push(i);                         // il numero è disponibile
  }
}
// crea il tabellone appena si apre la pagina
rendiTabellone(); 

// ESTRAI UN NUMERO
btnEstrai.addEventListener('click', function() {
  // se non ci sono più numeri disponibili, avvisa e si ferma
  if (disponibili.length === 0){
    alert('Tutti i numeri sono usciti!');
    return;
  } else {
    // sceglie una posizione a caso tra i numeri disponibili
    const indice = Math.floor(Math.random() * disponibili.length);

    // toglie quel numero dai disponibili (così non può uscire di nuovo)
    const numero = disponibili.splice(indice, 1)[0];

    // lo aggiunge all'INIZIO dei numeri estratti
    estratti.unshift(numero);

    // mostra il numero grande
    ultimoNumero.textContent = numero;

    // mostra i primi 10 di estratti, cioè gli ultimi 10 usciti (il più recente è a sinistra)
    cronologia.textContent = estratti.slice(0, 10).join(', ');

    // colora la cella del numero uscito
    document.querySelector('#numero-' + numero).classList.add('uscito');
  }
});

// RESET
btnReset.addEventListener('click', function(){
  estratti = [];                                      // svuota i numeri usciti
  ultimoNumero.textContent = "—";                     // rimette il trattino
  cronologia.textContent = "Nessun numero estratto."; // rimette il testo iniziale
  rendiTabellone();                                   // ricrea il tabellone e i disponibili
});