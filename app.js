// console.log("carlo")

// Descrizione
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

// funzione per generare 10 chiamate all api

function generaEmail (){

    for (let i = 0; i < 10; i++) {
        axios.get(endpoint)
        .then(response => { 
        console.log(response.data.response);
        })
        .catch(error => {
            console.log(error);
        });
    }
};



