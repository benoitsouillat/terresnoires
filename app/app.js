
let contentTitle = document.getElementById("content-title");
let content = document.getElementById("content");
content.style.display = "flex";
content.style.flexDirection = "row";
content.style.justifyContent = "space-around";


// Afficher les informations du chien

let dogNameLink = document.getElementById("dog_list");

let dogInfosPut = document.createElement("div");
dogInfosPut.id = "infos_container";

const showInfosDog = (e) => {


    content.innerHTML = "";
    contentTitle.innerHTML = "";
    content.style.justifyContent = "space-around";
    content.style.marginTop = "50px";
    content.appendChild(dogInfosPut);

    caneCorsoInfo.style.display = "none";
    dogInfosPut.innerHTML = "";
    dogInfosPut.style.marginTop = "50px";
    let dogNameClick = e.target.textContent;
    
    for(let i in dogClass)
    {
        if (dogClass[i].dogName.indexOf(dogNameClick) === 0)
        {
            let dogName = document.createElement("h1");
                dogName.textContent = dogClass[i].dogName;
                dogName.style.textDecoration = "underline";
            let dogBirth = document.createElement("p");
                dogBirth.textContent = "Date de naissance : " + dogClass[i].dogBirth;
            let dogBreed = document.createElement("p");
                dogBreed.textContent = "Race : " + dogClass[i].dogBreed;
                dogBreed.style.fontWeight = "bold";
            let dogBreeder = document.createElement("p");
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


let dogPictPut = document.createElement("div");
dogPictPut.id = "picture_container";

const showImgDog = (e) => {


    dogPictPut.innerHTML = "";
    content.appendChild(dogPictPut);
    let dogName = e.target.textContent.toLowerCase();

    for (let i in images)
    {
        if (images[i].indexOf(dogName) === 0 )
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


// Image de Infos Cane Corso 

let imageContentInfosCane = document.getElementById("image-info-cane");
let imageInfosCane = document.createElement("img");
    imageInfosCane.src = path + images[0] + jpg;

imageContentInfosCane.appendChild(imageInfosCane);




// Code pour ajouter un nouveau chien 
