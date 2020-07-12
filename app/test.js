
// Créer un slider


/* let path = "src/img/";
let images = ["okkaina1", "okkaina2", "panama1", "panama2", "rock1"];
let jpg = ".jpg";

let slider = document.getElementById("slider");

for (let i in images){

    let img = document.createElement("img");
    img.src = path + images[i] + jpg;
    img.style.height = getComputedStyle(slider).maxHeight;

    let sliderWidth = parseFloat(getComputedStyle(slider).width);


    // img.style.position = "relative";
    // img.style.left = sliderWidth / 2 + "px"


    slider.appendChild(img);
}
*/



// Fonction createDog

let $addDog = $('#add_dog');
let $content = $('#content');


const showFormCreateDog = () => {

    let dogName;
    let dogBirth;
    let dogBreed;
    let input = "<input>";
    let formulaireAddDog = $content.add("p");

    $content.append(formulaireAddDog);
    



}

const createDog = () => 
{

    

}

$addDog.on("click", showFormCreateDog);

