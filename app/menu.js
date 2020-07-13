let menuContent = document.getElementById("menu");
    menuContent.style.display = "flex";
    menuContent.style.flexDirection = "column";
    menuContent.style.justifyContent = "center";
    menuContent.style.alignItems = "center";

let menuObject = ["Accueil", "Nos reproducteurs", "Nos album Photos", "Nos portées" , "Le Cane Corso",
"Contact", "Notre Facebook"];

let menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    menuContainer.style.display = "flex";
    menuContainer.style.justifyContent = "space-around";

let listReproContainer = document.createElement("div");
    listReproContainer.innerHTML = "";
    listReproContainer.id = "listReproContainer";

menuContent.appendChild(menuContainer);

menuContent.appendChild(listReproContainer);



menuObject.forEach(elt => {

    let divMenu = document.createElement("div");

        divMenu.classList.add("div-menu");
        divMenu.classList.add("button-menu");

    let linkMenu = document.createElement("a");
        linkMenu.classList.add("button-menu");
        linkMenu.style.border = "none";
        linkMenu.style.boxShadow = "none";
        linkMenu.textContent = elt;
        linkMenu.href = "#";

    menuContainer.appendChild(divMenu);
    divMenu.appendChild(linkMenu);
});

// Menu reproducteur

let reproButton = menuContainer.children[1];

let cssReproButton = window.getComputedStyle(reproButton);

const hideListRepro = () => {


    listReproContainer.style.display = "none";
    listReproContainer.innerHTML = "";
}


const showListRepro = () => { 

    listReproContainer.innerHTML = "";
    listReproContainer.style.display = "flex";
    listReproContainer.style.position = "absolute";
    listReproContainer.style.left = reproButton.offsetLeft + "px";
    listReproContainer.style.top = reproButton.offsetTop + 50 + "px";

    dogClass.forEach(elt => {

        let dogNameLink = document.createElement("a");
            dogNameLink.href = "#";
            dogNameLink.style.width = cssReproButton.width;
            dogNameLink.classList.add("button-menu");
            dogNameLink.textContent = elt.dogName;

        listReproContainer.appendChild(dogNameLink);

        dogNameLink.addEventListener("click", showInfosDog);
        dogNameLink.addEventListener("click", showImgDog);

        
    });
};

const positionListRepro = (e) => {


     let startPositionLeft = reproButton.offsetLeft;
     let startPositionTop = reproButton.offsetTop;
 
     let endPositionLeft = startPositionLeft + listReproContainer.offsetWidth;
     let endPositionTop = startPositionTop + listReproContainer.offsetHeight + reproButton.offsetHeight;

    reproButton.addEventListener("mouseover", showListRepro, {once: true});

     if (e.clientX >= startPositionLeft && e.clientX <= endPositionLeft && e.clientY >= startPositionTop && e.clientY <= endPositionTop)
     {
        showListRepro();
     }
     else
     {
         hideListRepro();
     }
     
 }


reproButton.addEventListener("mouseover", positionListRepro);
listReproContainer.addEventListener("mouseout", positionListRepro);
reproButton.addEventListener("mouseout", positionListRepro);

listReproContainer.addEventListener("click", hideListRepro);

// Menu Cane Corso

let caneButton = menuContainer.children[4];
let caneCorsoInfo = document.getElementById("info-cane-corso");

const infoCane = () => {

    content.innerHTML = "";
    contentTitle.innerHTML = "";

    caneCorsoInfo.style.display = "flex";
    caneCorsoInfo.style.flexDirection = "column";
    caneCorsoInfo.style.justifyContent = "flex-start";


}
caneButton.addEventListener("click", infoCane);
caneButton.addEventListener("click", hideListRepro);

// Bouton Accueil

let accueilButton = menuContainer.children[0];

const showAccueil = () => {

    caneCorsoInfo.style.display = "none";
    content.innerHTML = "";
    contentTitle.innerHTML = "";
}

accueilButton.addEventListener("click", showAccueil);

// Bouton Facebook

let fbButton = menuContainer.children[6];

const startfb = () => {


    caneCorsoInfo.style.display = "none";
    dogPictPut.style.display = "none";
    dogInfosPut.style.display = "none";
    window.open("https://www.facebook.com/profile.php?id=100002013940417", "_blank");
}

fbButton.addEventListener("click", startfb);

// Bouton Album photo

let albumButton = menuContainer.children[2];
let imageDefault = document.createElement("img");
let dogListContent = document.createElement("div");
let albumContent = document.createElement("div");


const showAlbum = () => {

    caneCorsoInfo.style.display = "none";
    contentTitle.innerHTML = "";
    content.innerHTML = "";
    dogListContent.innerHTML = "";

    content.style.display = "flex";
    content.style.flexDirection = "row";
    content.style.justifyContent = "space-around";


let thisIsAlbum = document.createElement("h1");
    thisIsAlbum.textContent = " Voici nos albums photos";
    dogListContent.classList.add("dog-list-content");
    albumContent.classList.add("album-content");

    contentTitle.appendChild(thisIsAlbum);
    content.appendChild(dogListContent);
    content.appendChild(albumContent);


    dogClass.forEach(elt => {

        let dogNameLink = document.createElement("a");
            dogNameLink.textContent = elt.dogName;
            dogNameLink.href = "#";
            dogNameLink.classList.add("list-dog-link");
            dogListContent.appendChild(dogNameLink);
            dogNameLink.addEventListener("click", chooseDogPict);

    });


    imageDefault.src = path + images[0] + jpg;
    imageDefault.style.maxWidth = albumContent.style.width;
    imageDefault.classList.add("image-diapo-photo");

albumContent.appendChild(arrowLeft);
albumContent.appendChild(imageDefault);
albumContent.appendChild(arrowRight);

}
let arrowRight = document.createElement("a");
    arrowRight.href = "#";
    arrowRight.classList.add("list-dog-link");
    arrowRight.classList.add("arrow");
    arrowRight.textContent = " > ";

let arrowLeft = document.createElement("a");
    arrowLeft.href = "#";
    arrowLeft.classList.add("list-dog-link");
    arrowLeft.classList.add("arrow");
    arrowLeft.textContent = " < ";

let navigationDiapo = 0;
let arrayUrl = images;

const showPictDiapo = () => {
    imageDefault.src = path + arrayUrl[navigationDiapo] + jpg;
}
const resetDogListColor = () => {
    let tempArray = Array.from(dogListContent.children);
    for(let i in tempArray) {
        tempArray[i].style.color = "beige";
        tempArray[i].style.backgroundColor = "";
    };
}

const chooseDogPict = (e) => {

    resetDogListColor();
    e.preventDefault();
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
 
    let dogName = e.target.textContent.toLowerCase();
    
    arrayUrl = [];
    let j = 0;

    for (let i in images) {

        if (images[i].indexOf(dogName) === 0)
        {
            arrayUrl[j] = images[i];
            j++;
        }
        else {
            let message = document.createElement("p");
            message.textContent = "Pas d'image à afficher"; // A terminer


        }
    }
    navigationDiapo = 0;
    showPictDiapo();
}

const nextPict = (e) => {

    e.preventDefault();
    if(navigationDiapo >= 0 && navigationDiapo < (arrayUrl.length - 1))
    {
        navigationDiapo += 1;
        showPictDiapo();
    }
    else {
        console.log("Il n'y a plus de photo");
    }
}

const lastPict = (e) => {

    e.preventDefault();

    if(navigationDiapo > 0 && navigationDiapo < arrayUrl.length)
    {
        navigationDiapo -= 1;
        showPictDiapo();
    }
    else {
        console.log("Il n'y a plus de photo")
    }
}

arrowLeft.addEventListener("click", lastPict);
arrowRight.addEventListener("click", nextPict);
albumButton.addEventListener("click", showAlbum);
//dogListContent.addEventListener("click", chooseDogPict);



