// Generare una lista di nomi random
// Generare una lista di cognomi random
// Crea una funzione in grado di selezionare in modo random un nome dalla lista
// Controlla che la funzione sia corretta con console.log()
// Crea una funzione in grado di selezionare in modo random un nome dalla lista
// Controlla che la funzione sia corretta con console.log()
// Crea una funzione in grado di selezionare in modo random un nome e un cognome dalle liste
// Controlla che la funzione sia corretta con console.log()



const nameList = ["Luca", "Marco", "Paola", "Matteo", "Giovanna", "Simona"];
const surnameList = ["Rossi", "Verdi", "Bianchi","Celeste", "Smeraldi", "Amaranto"];
const guestRandomList = []

for (let i = 0; i < 10; i++) {
    const getNameRandom = nameList[Math.floor(Math.random() * nameList.length)];
    const getSurnameRandom = surnameList[Math.floor(Math.random() * surnameList.length)];
    const getFullnameRandom = `${getNameRandom} ${getSurnameRandom}`;
    guestRandomList.push(getFullnameRandom);
}

console.log(guestRandomList);


// considerazioni

/*
    ho capito che bisogna inserire all'interno del for queste variabili

    const getNameRandom = nameList[Math.floor(Math.random() * nameList.length)];
    const getSurnameRandom = surnameList[Math.floor(Math.random() * surnameList.length)];
    const getFullnameRandom = `${getNameRandom} ${getSurnameRandom}`;
    guestRandomList.push(getFullnameRandom);

    perche se le tengo all'esterno mi crea un nome completo soltato una volta e non 10 come io vorrei
*/







