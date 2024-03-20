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

// Creare l’array di oggetti con le informazioni fornite.

const ourTeam = [
    {
        name: 'Wayne Barret',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },    
    {
        name: 'Angela Carrol',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },    
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },    
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },    
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },    
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
    
];
console.log(ourTeam);
// Selezionare l'elemento html #list
const listContainer = document.querySelector('#list');
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let i = 0; i < ourTeam.length; i++) {
    const thisMember = ourTeam[i];
    console.log(`${thisMember.name} ${thisMember.role} ${thisMember.image}`);
    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    // creare costante con tutti gli elementi della lista
    const newLi = `<li>
    <h3>${thisMember.name}</h3>
    <p>${thisMember.role}</p>
    <div>${thisMember.image}</div>
    </li>`;

console.log(newLi);
listContainer.innerHTML += newLi;
};





