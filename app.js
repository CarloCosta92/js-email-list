// console.log("carlo")

// Descrizione
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const listContainer = document.getElementById("list-container");

//array per salvare le mail

let emailSalvate = [];
// funzione per chiamare api

function generaEmail() {

    emailSalvate = [];                          // svuoto array e lista per utilizzo del bottone
    listContainer.innerHTML = "";

    // ciclo for per fare 10 chiamate

    for (let i = 0; i < 10; i++) {
        axios.get(endpoint)
            .then(response => {
                emailSalvate.push(response.data.response);


                // console.log(response.data.response);

                // qui ci metto la lista

                let item = "";

                for (let i = 0; i < emailSalvate.length; i++) {
                    item += `<li class="list-group-item">${emailSalvate[i]}</li>`;
                }

                listContainer.innerHTML = item;


            })
            .catch(error => {
                console.log(error);
                listContainer.innerHTML = `<div class="alert alert-danger">
            Hai sbagliato qualcosa!!
          </div>`;
            });
    }
};

// console.log(emailSalvate)

generaEmail();



// generare nuove mail col bottone
const bottone = document.getElementById("bottone");

bottone.addEventListener("click", function () {

    
    generaEmail();
}
);




// lista di bootstrap

// <ul class="list-group list-group-flush">
//   <li class="list-group-item">An item</li>
//   <li class="list-group-item">A second item</li>
// </ul>