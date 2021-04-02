(() => {

// ---------------- Burger Menu ----------------
const menuButton = document.querySelector(".menuButton"),
      menuSide = document.querySelector("#menuSide"),
      wholeBody = document.body;
let menuExpand = false;

function menuCheck() {
  if(!menuExpand) {
    menuButton.classList.add("expanded");
    menuSide.classList.add("expanded");
    wholeBody.classList.add("expanded");
    menuExpand = true;
  }
  else {
    menuButton.classList.remove("expanded");
    menuSide.classList.remove("expanded");
    wholeBody.classList.remove("expanded");
    menuExpand = false;
  }
}

menuButton.addEventListener("click", menuCheck);
// ---------------- End Burger Menu ----------------
const allButtons = document.querySelectorAll(".buttons"),
      detailsBox = document.querySelector(".detailsBox"),
      ingIcon = document.querySelector(".ings"),
      perIcon = document.querySelector(".pers"),
      foodIcon = document.querySelector(".foods"),
      imgBox = document.querySelector(".imgContainer"),
      beerName = document.querySelector(".beerTitle"),
      beerImage = document.querySelector(".beerImg"),
      introContent = document.querySelector(".introCont"),
      ingText = document.querySelector(".inText"),
      perText = document.querySelector(".percentText"),
      foodsText = document.querySelector(".foodText");


const beerData = [

  ["01 | PURE LAGER",
  `The testing result of this flavour has been split between participants
  sworn it was of Coca Cola taste while the rest pledged their Winnie's
  life it was of the original Budweiser recipe. The only way to know
  which one you'll get is to get one. So hurry, and Pure Lager up!`,
  `Secretive finest item, feasibly Oriental rice, oatmeal`,
  `6% ABV`,
  `Impressionist burger, minimalistic Hollywood steak`],

  ["02 | MANDARIN",
  `Fresh, sweet and all-round: Such as our customers' spirit and their partner's satifaction in their romantic kissing activities after using our rising star in popularity - Mandarin flavour.`,
  `Atlantic mandarin oranges, bumblebee honey extract, Sahara rain liquid`,
  `5% ABV`,
  `Frozen meat, water-fried dumplings`],

  ["03 | MINT" ,
  `To be minty, or not to be, that is the question everyone must once ask upon themselves for the good of the smell manifestation of their air exhales. Do not fret however, our mint flavour is here to assist you.`,
  `Finest Amazon dried mint leaf, Al Capone's goat tear, first snow melted`,
  `5% ABV`,
  `Dark Forest cake, octopus sashimi`],

  ["04 | CREAM ALE" ,
  `You would be surprised to find your vocal instrument coated pleasantly in the aftermath of not a promise of an explosive flavour battle between richness and carbohydratedness, but of a Presidential debate.`,
  `Electronic-made alternative improved lemon, Red elephant's milk cream`,
  `4% ABV`,
  `Apple pie, Beijing duck`]
];

function beerDetails() {
  if (this.dataset.beer == "0") {
    detailsBox.classList.add("red");
    detailsBox.classList.remove("yellow");
    detailsBox.classList.remove("green");
    detailsBox.classList.remove("blue");
    imgBox.classList.add("red");
    imgBox.classList.remove("yellow");
    imgBox.classList.remove("green");
    imgBox.classList.remove("blue");
  }
  else if (this.dataset.beer == "1") {
    detailsBox.classList.add("yellow");
    detailsBox.classList.remove("red");
    detailsBox.classList.remove("green");
    detailsBox.classList.remove("blue");
    imgBox.classList.add("yellow");
    imgBox.classList.remove("red");
    imgBox.classList.remove("green");
    imgBox.classList.remove("blue");
  }
  else if (this.dataset.beer == "2") {
    detailsBox.classList.add("green");
    detailsBox.classList.remove("red");
    detailsBox.classList.remove("yellow");
    detailsBox.classList.remove("blue");
    imgBox.classList.add("green");
    imgBox.classList.remove("red");
    imgBox.classList.remove("yellow");
    imgBox.classList.remove("blue");
  }
  else {
    detailsBox.classList.add("blue");
    detailsBox.classList.remove("red");
    detailsBox.classList.remove("yellow");
    detailsBox.classList.remove("green");
    imgBox.classList.add("blue");
    imgBox.classList.remove("red");
    imgBox.classList.remove("yellow");
    imgBox.classList.remove("green");
  }


  ingIcon.src = `images/ing_${this.dataset.icon}.svg`;
  perIcon.src = `images/per_${this.dataset.icon}.svg`;
  foodIcon.src = `images/food_${this.dataset.icon}.svg`;


  beerImage.src = `images/beer_${this.dataset.beer}.png`;
  beerName.textContent = `${beerData[this.dataset.beer][0]}`;
  introContent.textContent = `${beerData[this.dataset.beer][1]}`;
  ingText.textContent = `${beerData[this.dataset.beer][2]}`;
  perText.textContent = `${beerData[this.dataset.beer][3]}`;
  foodsText.textContent = `${beerData[this.dataset.beer][4]}`;
}


allButtons.forEach(button => {
  button.addEventListener("click", beerDetails)
});

})();
