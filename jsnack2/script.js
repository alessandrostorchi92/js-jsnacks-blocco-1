// Consegna: Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

// Procedimento:

// 1) Crea un array di numeri interi
// 2) Crea una variabile di partenza = 0, dalla quale in seguito verrà calcolata la somma di tutti i numeri in posizione dispari.
// 3) Crea un "ciclo for" avente un numero di cicli pari al numero della lista di numeri presenti nell'arrey
// 4) Fissare la condizione affinchè vengano selezionati solo i numeri in posizione dispari all'interno dell'arrey
// 5) Somma gli elementi contenuti nell'array in posizione dispari
// 6) Stampa il risultato in console 


const listNumbers = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
let sumOddNumbers = 0;

for (let i = 0; i < listNumbers.length; i++) {

    if (i % 2 !== 0) { // Questa condizione verifica se l'indice è dispari  
        console.log(`I numeri in posizione dispari sono: ${listNumbers[i]}`);
        sumOddNumbers += listNumbers[i];
    }

}

console.log(`La somma degli elementi in posizione dispari è: ${sumOddNumbers}`);


