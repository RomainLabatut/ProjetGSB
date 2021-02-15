const dataPraticien = [
    {
        "id": 1,
        "nom": "Lee",
        "prenom": "Bruce",
        "adresse": "Marseille",
        "specialite": "ophtalmologue",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 2,
        "nom": "Hugo",
        "prenom": "Victor",
        "adresse": "Aix-En-Provence",
        "specialite": "Dentiste",
        "photo": "PraticienF.jfif"
    },
    {
        "id": 3,
        "nom": "Mozart",
        "prenom": "Amadeus",
        "adresse": "Paris",
        "specialite": "Dentiste",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 4,
        "nom": "Beethoven",
        "prenom": "Ludwig Von",
        "adresse": "Nantes",
        "specialite": "ophtalmologue",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 5,
        "nom": "Proust",
        "prenom": "Marcel",
        "adresse": "Marseille",
        "specialite": "Dentiste",
        "photo": "PraticienF.jfif"
    },
    {
        "id": 6,
        "nom": "Arouet",
        "prenom": "François-Marie",
        "adresse": "Paris",
        "specialite": "ophtalmologue",
        "photo": "PraticienF.jfif"
    },
    {
        "id": 7,
        "nom": "Poquelin",
        "prenom": "Jean-baptiste",
        "adresse": "Lille",
        "specialite": "Dentiste",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 8,
        "nom": "Shakespear",
        "prenom": "William",
        "adresse": "Paris",
        "specialite": "Infirmier",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 9,
        "nom": "Geldog",
        "prenom": "Bob",
        "adresse": "Rouen",
        "specialite": "Infirmier",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 10,
        "nom": "Shakespear",
        "prenom": "William",
        "adresse": "Lille",
        "specialite": "Dentiste",
        "photo": "PraticienH.jfif"
    }
];

const dataPrat = document.querySelector('#list');
dataPraticien.forEach((element) =>{
    dataPrat.insertAdjacentHTML ('beforeEnd', `
 <div class="album">
    <img src="${element.photo}" class="cover" alt="...">

    <div>
    
        <h5 class="card-title">${element.nom} ${element.prenom}</h5>
        <h5 class="card-title">${element.adresse}</h5>
        <h5 class="card-title">${element.specialite}</h5>

    </div>
 </div>
`)
});