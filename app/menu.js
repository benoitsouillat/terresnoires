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
    // listReproContainer.style.display = "none";

menuContent.appendChild(menuContainer);

menuContent.appendChild(listReproContainer);



menuObject.forEach(elt => {

    let divMenu = document.createElement("div");

        divMenu.classList.add("div-menu");
        divMenu.classList.add("button-menu");

    let linkMenu = document.createElement("a");
        linkMenu.textContent = elt;
        linkMenu.href = "#";

    menuContainer.appendChild(divMenu);
    divMenu.appendChild(linkMenu);
});

// Menu reproducteur

let reproButton = menuContainer.children[1];
    reproButton.onmouseover = "showListRepro()"; // Ne fonctionne pas

let cssButtonListRepro = window.getComputedStyle(reproButton);

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

        let dogList = document.createElement("div");
            dogList.classList.add("button-menu");
            dogList.style.width = cssButtonListRepro.width;

        let dogNameLink = document.createElement("a");
            dogNameLink.href = "#";
            dogNameLink.textContent = elt.dogName;

        listReproContainer.appendChild(dogList);
        dogList.appendChild(dogNameLink);

        dogList.addEventListener("click", showImgDog);
        dogList.addEventListener("click", showInfosDog);
        
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

    caneCorsoInfo.style.display = "flex";
    caneCorsoInfo.style.flexDirection = "column";
    caneCorsoInfo.style.justifyContent = "flex-start";
    dogPictPut.style.display = "none";
    dogInfosPut.style.display = "none";

}
caneButton.addEventListener("click", infoCane);
caneButton.addEventListener("click", hideListRepro);

// Bouton Accueil

let accueilButton = menuContainer.children[0];

const showAccueil = () => {

    caneCorsoInfo.style.display = "none";
    dogPictPut.style.display = "none";
    dogInfosPut.style.display = "none";
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




