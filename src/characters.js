import data from './data/ghibli/ghibli.js';
import { sortAzPersons, filterSpecie, filterGender, calculoCharacters } from './data.js';

const people = data.films.map(addPeople => addPeople.people)
const arrPeople = [].concat.apply([], people);
const charactersContainer = document.getElementById("container-cards-character");

function showCardsCharacters(arrCharacters) {

    charactersContainer.innerHTML = arrCharacters.map((character) =>

        `        
        <div class="character-details"> 
            <img src="${character.img}" alt="Imagem personagem" class="card-character"  id="card-character"> 
            <p class="name-character">${character.name} </p>   
        </div>        
        `

    ).join('')
}

showCardsCharacters(arrPeople)

const sortOrderPersons = document.getElementById("sort-az");

sortOrderPersons.addEventListener("change", (event) => {
    const selectedSortPerson = event.target.value;
    const filterAzPerson = sortAzPersons(arrPeople, selectedSortPerson);
    showCardsCharacters(filterAzPerson);
});

const filterSpecies = document.getElementById("select-specie");

filterSpecies.addEventListener("change", (event) => {
    const selectedSpecie = event.target.value;
    const getItemSpecie = filterSpecie(arrPeople, selectedSpecie);
    showCardsCharacters(getItemSpecie);
    showAmountSpecie(getItemSpecie);
});

const filterGenders = document.getElementById("select-gender");

filterGenders.addEventListener("change", (event) => {
    const selectedGender = event.target.value;
    const getItemGender = filterGender(arrPeople, selectedGender);
    showCardsCharacters(getItemGender);
    showAmountGender(getItemGender);
})

const amountSpecie = document.getElementById('result-percent')



function showAmountSpecie(selectedFilter) {

    const selectSpecie = document.getElementById('select-specie').value;
    const calculoPercent = calculoCharacters(selectedFilter, arrPeople).toFixed(0);
    amountSpecie.innerHTML =
        `
    <div class="character-amount-container>
    <p class="character-amount"> ${calculoPercent}% dos personagen(s) são da espécie ${selectSpecie}</p>
    <div>
    `;

}

const amountGender = document.getElementById('result-percent')

function showAmountGender(selectedFilter) {

    const selectGender = document.getElementById('select-gender').value;
    const calculoPercent = calculoCharacters(selectedFilter, arrPeople).toFixed(0);
    amountGender.innerHTML =
        `
    <div class="characcalculoPercentter-amount-container>
    <p class="character-amount"> ${calculoPercent} % dos personagen(s) são do gênero ${selectGender}</p>
    <div>
    `
        ;
}

const buttonClean = document.getElementById("btn-clean");
function cleanFilters() {
    window.location.reload();
}
buttonClean.addEventListener("click", cleanFilters);