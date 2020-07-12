let menuContent = document.getElementById("menu");
    menuContent.style.display = "flex";
    menuContent.style.flexDirection = "column";
    menuContent.style.justifyContent = "center";
    menuContent.style.alignItems = "center";

let menuObject = ["Accueil", "Nos reproducteurs", "Nos album Photos", "Nos portées",
"Contact", "Notre Facebook", "Le Cane Corso"];

let menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    menuContainer.style.display = "flex";
    menuContainer.style.justifyContent = "center";

let listReproContainer = document.createElement("div");
    listReproContainer.innerHTML = "";
    listReproContainer.id = "listReproContainer";
    listReproContainer.style.display = "none";

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


const showListRepro = () => { 

    listReproContainer.innerHTML = "";
    listReproContainer.style.display = "flex";
    listReproContainer.style.flexDirection = "column";
    listReproContainer.style.justifyContent = "center";
    listReproContainer.style.border = "black 0px solid";
    listReproContainer.style.position = "absolute";
    listReproContainer.style.left = reproButton.offsetLeft + "px";
    listReproContainer.style.top = reproButton.offsetTop + 50 + "px";



    dogClass.forEach(elt => {


        let dogList = document.createElement("div");
            dogList.classList.add("button-menu");
            dogList.style.width = cssButtonListRepro.width;


        let dogNameLink = document.createElement("a");
            dogNameLink.href = "#"
            dogNameLink.textContent = elt.dogName;

        listReproContainer.appendChild(dogList);
        dogList.appendChild(dogNameLink);

        dogNameLink.addEventListener("click", showImgDog);
        dogNameLink.addEventListener("click", showInfosDog);
        
    });


    
};

const hideListRepro = () => {

    listReproContainer.style.display = "none";
    listReproContainer.innerHTML = "";
}


reproButton.addEventListener("click", showListRepro);
// listReproContainer.addEventListener("mouseover", showListRepro);

listReproContainer.addEventListener("click", hideListRepro);



