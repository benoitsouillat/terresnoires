// Ajouter un nouveau chien => créer la liste d'elevage

let breederListContent = document.getElementById("new_dog_breeder");
let breedListContent = document.getElementById("new_dog_breed");
let breederList = [terreNoire, templeJade, diMunteanu, damoiseaux];
let breedList = [caneCorso, whippet];

const createListBreeders = () => {

breederList.forEach(elt => {
    let createOption = document.createElement("option");
    createOption.textContent = elt;
    breederListContent.appendChild(createOption);
})
}

const createListBreed = () => {

breedList.forEach(elt => {
    let createOption = document.createElement("option");
    createOption.textContent = elt;
    breedListContent.appendChild(createOption);

})
}

createListBreed();
createListBreeders();

let addDogButton = document.getElementById("add_dog");
let dogNameInfos = document.getElementById("new_dog_name");
let dogBirthInfos = document.getElementById("new_dog_birth");
let dogBreederInfos = document.getElementById("new_dog_breeder");
let dogBreedInfos = document.getElementById("new_dog_breed");

const addDog = (e) => {

    e.preventDefault();
    let birth = dogBirthInfos.value;
    let regexBirth = /[0-9][0-9] [A-S][a-z]*[e-t] 20[0-9][0-9]/

    if(dogNameInfos.value.length < 3)
    {
        console.log("Entrez un nom !!");
    }
    else if(dogBirthInfos.value.length < 5)
    {
        console.log("Entrez une date de naissance");
    }
    else if(regexBirth.test(birth) == false)
    {
        console.log("Entrez une date de naissance valide (avec une majuscule au mois )");
    }
    else
    {
        let n = dogClass.length;
        dogClass[n] = new dog(dogNameInfos.value, dogBirthInfos.value, dogBreedInfos.value, dogBreederInfos.value, "#");


        dogNameInfos.value = "";
        dogBirthInfos.value = "";
    }


}


addDogButton.addEventListener("click", addDog);

