const breed = " Cane Corso";
const terreNoire = " du domaine des terres noires";
const templeJade = " du temple de jade";
const diMunteanu = " Cane di munteanu";
const damoiseaux = " de la romance des damoiseaux";

let content = document.getElementById("content");
content.style.display = "flex";
content.style.flexDirection = "row";
content.style.justifyContent = "space-around";

class dog {
    constructor(dogName, dogBirth, dogBreed, dogBreeder, dogLink){

    this.dogName = dogName;
    this.dogBirth = dogBirth;
    this.dogBreed = dogBreed;
    this.dogBreeder = dogBreeder;
    this.dogLink = dogLink;
    }
}

let okkaina = new dog ("Okkaina", "10 Septembre 2018", breed, templeJade, "#");
let panama = new dog ("Panama", "02 Juin 2019", breed, templeJade, "#");
let rock = new dog ("Rock", "18 Mars 2018", breed, diMunteanu, "#");
let irreelle = new dog("Irréelle", "15 Septembre 2013", "whippet", damoiseaux, "#" );


let dogClass = [okkaina, panama, rock, irreelle]; 


// Afficher liste Chien
/*
for (let i in dogClass)
{
    let dogLiElt = document.createElement("li");
    let dogAElt = document.createElement("a");
    dogAElt.href = dogClass[i].dogLink;
    dogAElt.textContent = dogClass[i].dogName;
    dogAElt.style.color = "darkgoldenrod";

    document.getElementById("dog_list").appendChild(dogLiElt);
    dogLiElt.appendChild(dogAElt);
}
*/


// Afficher les informations du chien

let dogNameLink = document.getElementById("dog_list");

let dogInfosPut = document.createElement("div");
dogInfosPut.id = "infos_container";
content.appendChild(dogInfosPut);

const showInfosDog = (e) => {

    dogInfosPut.innerHTML = "";
    dogInfosPut.style.marginTop = "50px";
    let dogNameClick = e.target.textContent;
    
    for(let i in dogClass)
    {
        if (dogClass[i].dogName.indexOf(dogNameClick) === 0)
        {
            let dogName = document.createElement("h1");
                dogName.textContent = dogClass[i].dogName;
                dogName.style.color = "beige";
                dogName.style.textDecoration = "underline";
            let dogBirth = document.createElement("p");
                dogBirth.textContent = "Date de naissance : " + dogClass[i].dogBirth;
                dogBirth.style.color = "beige";
            let dogBreed = document.createElement("p");
                dogBreed.textContent = "Race : " + dogClass[i].dogBreed;
                dogBreed.style.color = "beige";
                dogBreed.style.fontWeight = "bold";
            let dogBreeder = document.createElement("p");
                dogBreeder.style.color = "beige";
                dogBreeder.style.fontWeight = "bold";
                dogBreeder.style.textAlign = "center";
                dogBreeder.style.marginBottom = "50px";
                dogBreeder.textContent = dogClass[i].dogBreeder;

            dogInfosPut.appendChild(dogName);
            dogInfosPut.appendChild(dogBreeder);
            dogInfosPut.appendChild(dogBreed);
            dogInfosPut.appendChild(dogBirth);

        }
    }
}

// Afficher la liste d'images en cliquant sur le nom

let path = "src/img/";
let images = ["okkaina1", "okkaina2", "panama1", "panama2", "rock1"];
let jpg = ".jpg";

let dogPictPut = document.createElement("div");
dogPictPut.id = "picture_container";
content.appendChild(dogPictPut);

const showImgDog = (e) => {

    dogPictPut.innerHTML = "";
    let dogName = e.target.textContent.toLowerCase();

    for (let i in images)
    {
        if (images[i].indexOf(dogName) === 0)
        {
            let print = document.createElement("img");
            print.src = path + images[i] + jpg;
            print.style.maxWidth = "300px";
            print.style.margin = "20px";

            dogPictPut.style.display = "flex";
            dogPictPut.style.flexDirection = "column";
            dogPictPut.style.alignItems = "center";
            dogPictPut.appendChild(print);
        }
    }
}

dogNameLink.addEventListener("click", showImgDog);
dogNameLink.addEventListener("click", showInfosDog);
