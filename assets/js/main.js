/*

BONUS 1:
trasformare la stringa foto in una immagine effettiva
BONUS 2:
organizzare i singoli membri in card/schede

*/

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// ## STEP
// 1. Stampare su console le informazioni di nome, ruolo e la stringa della foto
// 2. Stampare le stesse informazioni su DOM sottoforma di stringhe


// 1. Stampare su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member.name);
    console.log(member.role);
    console.log(member.image);
}


// 2. Stampare le stesse informazioni su DOM sottoforma di stringhe
//Prendo l'elemento dalla DOM
const containerEl = document.querySelector(`.container`)
console.log(containerEl);

//Usando il ciclo FOR stampo sulla DOM con INNER
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    
    //Creo un markup
    const markup = `<h3>${member.name}</h3><p>${member.role}</p><img src="./assets/img/${member.image}" alt="">`

    containerEl.innerHTML += markup
}
