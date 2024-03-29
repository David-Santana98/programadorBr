let game = {
  lockMode: false,
  firstCard: null,
  secondCard: null,

  
  techs: [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react",
  ],

  cards: null,

  setCard: function (id) {
    let card = this.cards.filter((cards) => cards.id === id)[0];
    console.log(card);
    if (card.flipped || this.lockMode) {
      return false;
    }

    if (!this.firstCard) {
      this.firstCard = card;
      this.firstCard.flipped = true;
      return true;
    } else {
      this.secondCard = card;
      this.secondCard.flipped =  true;
      this.lockMode = true;
      return true;
    }
  },

  checkMatch: function () {
    if(!this.firstCard || !this.secondCard) {
       return false;
    }
    return this.firstCard.icon === this.secondCard.icon;
  },

  clearCards: function () {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },

  unflipCards() {
    this.firstCard.flipped = false;
    this.secondCard.flipped = false;
    this.clearCards();
  },

  checkGameOver() {
   return this.cards.filter(card=>!card.flipped).length === 0;
  },

  createCardsFromTechs: function (techs) {
    this.cards = [];

    this.techs.forEach((tech) => {
      this.cards.push(this.createPairFromTech(tech));
    });

    this.cards = this.cards.flatMap((pair) => pair); // retorna as 20 cartas
    this.shuffleCards();
    return this.cards;
  },

  createPairFromTech: function (tech) {
    return [
      {
        id: this.createIdWithTech(tech),
        icon: tech,
        flipped: false,
      },
      { id: this.createIdWithTech(tech), icon: tech, flipped: false },
    ];
  },

  // criando o ID
  createIdWithTech: function (tech) {
    return tech + parseInt(Math.random() * 1000);
  },

  //MODELO DE CARTAS EMBARALHADOS
  shuffleCards: function (cards) {
    let currentIndex = this.cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex); //pegando o último elemento do array
      currentIndex--;

      [this.cards[randomIndex], this.cards[currentIndex]] = [
        this.cards[currentIndex],
        this.cards[randomIndex],
      ];
    }
  },
};
