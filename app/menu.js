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

        //let dogList = document.createElement("div");


        let dogNameLink = document.createElement("a");
            dogNameLink.href = "#";
            dogNameLink.style.width = cssReproButton.width;
            dogNameLink.classList.add("button-menu");

            dogNameLink.textContent = elt.dogName;

        listReproContainer.appendChild(dogNameLink);
        //dogList.appendChild(dogNameLink);

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
    dogPictPut.style.display = "none";
    dogInfosPut.style.display = "none";

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


const showAlbum = () => {

    caneCorsoInfo.style.display = "none";
    contentTitle.innerHTML = "";
    content.innerHTML = "";

    content.style.display = "flex";
    content.style.flexDirection = "row";
    content.style.justifyContent = "space-between";


let thisIsAlbum = document.createElement("h1");
    thisIsAlbum.textContent = " Voici nos albums photos";
    dogListContent.style.width = "20%";
    dogListContent.style.display = "flex";
    dogListContent.style.flexDirection = "column";
    dogListContent.style.textAlign = "center";
    dogListContent.style.justifyContent = "flex-start";
let albumContent = document.createElement("div");
    albumContent.style.width = "76%";
    albumContent.style.display = "flex";
    albumContent.style.justifyContent = "space-around";
    albumContent.style.alignItems = "center";

    contentTitle.appendChild(thisIsAlbum);
    content.appendChild(dogListContent);
    content.appendChild(albumContent);


    dogClass.forEach(elt => {

        let dogNameLink = document.createElement("a");
            dogNameLink.textContent = elt.dogName + "  ";
            dogNameLink.href = "#";
            dogNameLink.classList.add("list-dog-link");
            dogNameLink.classList.add("dogNameLink");
            dogListContent.appendChild(dogNameLink);

    });


    imageDefault.src = path + images[0] + jpg;
    imageDefault.style.maxWidth = albumContent.style.width;
    imageDefault.style.maxHeight = "500px";

    imageDefault.style.width = "auto";
    imageDefault.style.Height = albumContent.style.height;




albumContent.appendChild(arrowLeft);
albumContent.appendChild(imageDefault);
albumContent.appendChild(arrowRight);

}
let arrowRight = document.createElement("a");
    arrowRight.href = "#";

    arrowRight.style.border = "2px solid beige";
    arrowRight.style.boxShadow = "3px 3px 5px";
    arrowRight.style.fontSize = "2em";
    arrowRight.textContent = " > ";
    arrowRight.classList.add("list-dog-link");
    arrowRight.style.height = "20px"
    arrowRight.style.width = "20px"
    arrowRight.style.paddingBottom = "20px";

let arrowLeft = document.createElement("a");
    arrowLeft.classList.add("list-dog-link");
    arrowLeft.href = "#";
    arrowLeft.style.border = "2px solid beige";
    arrowLeft.style.boxShadow = "3px 3px 5px";
    arrowLeft.style.fontSize = "2em";
    arrowLeft.textContent = " < ";
    arrowLeft.style.height = "20px"
    arrowLeft.style.width = "20px"
    arrowLeft.style.paddingBottom = "20px";

let navigationDiapo = 0;

const showPictDiapo = () => {

    imageDefault.src = path + images[navigationDiapo] + jpg;
}

const chooseDogPict = (e) => {

    let dogName = e.target.textContent.toLowerCase();

    if (images[navigationDiapo].indexOf(dogName) === 0)
    {
        imageDefault.src = path + images[navigationDiapo] + jpg;
    }
    else if (navigationDiapo < images.length)
    {
        navigationDiapo += 1;

    }
    else{
        console.log("il n'y a plus d'image");
    }

}


const nextPict = (e) => {

    e.preventDefault();
    if(navigationDiapo >= 0 && navigationDiapo < (images.length - 1))
    {
        navigationDiapo += 1;
        showPictDiapo();
    }
    else {
        console.log("Il n'y a plus de photo")
    }

}

const lastPict = (e) => {

    e.preventDefault();


    if(navigationDiapo > 0 && navigationDiapo < images.length)
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

dogListContent.addEventListener("click", chooseDogPict);



