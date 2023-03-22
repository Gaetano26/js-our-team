/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

//creo array di oggetti con tutti i membri del team
const gruppo = [
    //membro 1
    {
        nome : 'Wayne',
        cognome : 'Barnett',
        ruolo : 'Founder & CEO',
        foto : 'wayne-barnett-founder-ceo.jpg',
    },
    //membro 2   	           
    {
        nome: 'Angela',
        cognome: 'Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    //membro 3   	    	         
    {
        nome: 'Walter',
        cognome: 'Gordon',
        ruolo: 'Office Manager',
        foto:'walter-gordon-office-manager.jpg',
    },
       	    	  
    //membro 4		              
  	    	      
    {
        nome: 'Angela',
        cognome: 'Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    
     //membro 5
    {
        nome: 'Scott',
        cognome: 'Estrada',
        ruolo: 'Developer',
        foto :'scott-estrada-developer.jpg',
    },

     //membro 6
    {
        nome: 'Barbara',
        cognome: 'Ramos',
        ruolo: 'Graphic Designer',
        foto : 'barbara-ramos-graphic-designer.jpg',
    },

];

 //creiamo una costante per prendere la row
const row = document.querySelector('.row');
let cards = '';
 //ciclo per creare delle card per ogni oggetto nell'array e i loro rispettivi valori
for (let i = 0; i < gruppo.length; i++) {
      const membro = gruppo[i];
       //constante card con il contenuto da creare e inserire 
      const card = `
      <div class="col-4">
          <div class="card mt-3">
                <div class="card-head">
                        <img class="card-img-top" src="img/${membro.foto}" alt"${membro.nome} ${membro.cognome}">
                </div>
              <div class="card-body">
                   <div class="text-center fs-2 mb-2"><span>${membro.nome}</span><span class="ms-2">${membro.cognome}</span></div>
                   <div class="text-center">${membro.ruolo}</div>
              </div>
          </div>
      </div>
      `
     //do il valore di card alla variabile cards
     cards += card;
}
 //inserisco tutte le card nella row
row.innerHTML += cards;