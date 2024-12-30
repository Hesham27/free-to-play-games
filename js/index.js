// import { displayGame } from './ui.js'


// getGame('mmorpg');

//  const mmorpg = document.getElementById("mmorpg");
//  mmorpg.addEventListener("click", function () {
//    getGame("mmorpg");
//  });

//  const shooter = document.getElementById("shooter");
//  shooter.addEventListener("click", function () {
//    getGame("shooter");
//  });
//  const sailing = document.getElementById("sailing");
//  sailing.addEventListener("click", () => {
//    getGame("sailing");
//  });
//  const permadeath = document.getElementById("permadeath");
//  permadeath.addEventListener("click", () => {
//    getGame("permadeath");
//  });

//  const superhero = document.getElementById("superhero");
//  superhero.addEventListener("click", () => {
//    getGame("superhero");
//  });

//  const pixel = document.getElementById("pixel");
//  pixel.addEventListener("click", () => {
//    getGame("pixel");
//  });

// export let allData = [];

// async function getGame(category) {
//   const gameRow = document.getElementById("gameRow");


//   gameRow.innerHTML = `
//     <div class="vh-100 d-flex justify-content-center align-items-center">
//       <span class="loader"></span>
//     </div>
//   `;

//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': 'd5ff5d1dc2msh1816f4c242cc788p108ccdjsn763672d05304',
//       'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
//     },
//   };

//   let api = await fetch(
//     `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
//     options
//   );
//   let respons = await api.json();
//   allData = respons;
// displayGame();
// }

//   displayGame()


import { UI } from './ui.js';
import { API } from './gametittle.js';

class GameManager {
  constructor() {
    this.ui = new UI();
    this.api = new API();
    this.allData = [];
  }

  async getGame(category) {
    this.ui.showLoader();
    this.allData = await this.api.fetchGamesByCategory(category);
    this.ui.displayGame(this.allData, (id) => this.getDetails(id));
  }

  async getDetails(id) {
    const gameDetails = await this.api.fetchGameDetails(id);
    this.ui.displayGameTitle([gameDetails], () => this.getGame('mmorpg'));
  }

  init() {
    const categories = ['mmorpg', 'shooter', 'sailing', 'permadeath', 'superhero', 'pixel'];
    categories.forEach((category) => {
      const button = document.getElementById(category);
      button.addEventListener('click', () => this.getGame(category));
    });

    this.getGame('mmorpg');
  }
}


const gameManager = new GameManager();
gameManager.init();

