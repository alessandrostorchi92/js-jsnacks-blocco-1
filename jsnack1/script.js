
// 1) Creo una lista di nomi 
// 2) Creo una lista di cognomi
// 3) Creo una lista degli invitati vuota, nella quale verranno inseriti i nomi degli invitati
// 4) Creo un ciclo for
// 5) Creo una costante sia per i nomi sia per i cognomi selezionati in modo random 
// 6) Creo una nuova costante in cui sono inseriti i nomi completi random degli invitati
// 7) Aggiungo la lista nella lista degli invitati vuota creata all'inizio

const nameList = ["Luca", "Marco", "Paola", "Matteo", "Giovanna", "Simona"];
const surnameList = ["Rossi", "Verdi", "Bianchi","Celeste", "Smeraldi", "Amaranto"];
const guestRandomList = []

for (let i = 0; i < 6; i++) {
    let getNameRandom = nameList[Math.floor(Math.random() * parseInt(nameList.length))];
    let getSurnameRandom = surnameList[Math.floor(Math.random() * parseInt(surnameList.length))];
    let getFullnameRandom = `${getNameRandom} ${getSurnameRandom}`;
    guestRandomList.push(getFullnameRandom);
}

console.log(guestRandomList);

// Domanda per Florian: Com faccio a fare in modo che il nome degli invitati non venga ripetuto?

// considerazioni

/*
    ho capito che bisogna inserire all'interno del for queste variabili

    const getNameRandom = nameList[Math.floor(Math.random() * nameList.length)];
    const getSurnameRandom = surnameList[Math.floor(Math.random() * surnameList.length)];
    const getFullnameRandom = `${getNameRandom} ${getSurnameRandom}`;
    guestRandomList.push(getFullnameRandom);

    perche se le tengo all'esterno mi crea un nome completo soltato una volta e non 10 come io vorrei
*/







