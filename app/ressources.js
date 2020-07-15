const caneCorso = " Cane Corso ";
const whippet = " Whippet "
const terreNoire = " du domaine des terres noires";
const templeJade = " du temple de jade";
const diMunteanu = " Cane di munteanu";
const damoiseaux = " de la romance des damoiseaux";

class dog {
    constructor(dogName, dogBirth, dogBreed, dogBreeder, dogLink){

    this.dogName = dogName;
    this.dogBirth = dogBirth;
    this.dogBreed = dogBreed;
    this.dogBreeder = dogBreeder;
    this.dogLink = dogLink;
    }
}

let okkaina = new dog ("Okkaina", "10 Septembre 2018", caneCorso, templeJade, "#");
let panama = new dog ("Panama", "02 Juin 2019", caneCorso, templeJade, "#");
let rock = new dog ("Rock", "18 Mars 2018", caneCorso, diMunteanu, "#");
let irreelle = new dog("Irréelle", "15 Septembre 2013", whippet, damoiseaux, "#" );
let nuitetoile = new dog("Nuit d'étoiles", "31 Octobre 2017", whippet, damoiseaux, "#" );


let dogClass = [okkaina, panama, rock, irreelle, nuitetoile]; 

let path = "src/img/";
let images = ["okkaina1", "okkaina2", "okkaina3", "okkaina4", "panama1", "panama2","panama3", "panama4", "rock1", "rock2", "rock3", "irréelle1", "nuit d'étoiles1"];
let jpg = ".jpg";