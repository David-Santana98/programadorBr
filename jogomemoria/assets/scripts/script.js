const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";

let techs = [
  "bootstrap",
  "CSS",
  "electron",
  "firebase",
  "html",
  "javascript",
  "jquery",
  "mongo",
  "node",
  "react",
];

let cards = null;

startGame();

function startGame() {
  cards = createCardsFromTechs(techs);
  shuffleCards(cards);
  initializeCards(cards);
}

function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard");

  cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;

    createCardContent(card, cardElement);

    cardElement.addEventListener('click', flipcard)
    gameBoard.appendChild(cardElement); 
})

}

function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardface(face, card, element) {

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face === FRONT) {

    }else {
      cardElementFace.innerHTML = "&lt/&gt";
    }
}


function shuffleCards(cards) {
  let currentIndex = cards.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex); //pegando o último elemento do array
    currentIndex--;

    [cards[randomIndex], cards[currentIndex]] = [
      cards[currentIndex],
      cards[randomIndex],
    ];
  }
}

function createCardsFromTechs(techs) {
  let cards = [];

  techs.forEach((tech) => {
    cards.push(createPairFromTech(tech));
  });

  return cards.flatMap((pair) => pair);
}

function createPairFromTech(tech) {
  return [
    {
      id: createIdWithTech(tech),
      icon: tech,
      flipped: false,
    },
    { id: createIdWithTech(tech), icon: tech, flipped: false },
  ];
}

// criando o ID
function createIdWithTech(tech) {
  return tech + parseInt(Math.random() * 1000);
}
function flipCard()
