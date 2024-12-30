


// import {displayGameTitle} from "./ui.js";



//  export let getAllDetailes = {};

// export async function getDetiles(id) {
//   const param = id;

//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': 'd5ff5d1dc2msh1816f4c242cc788p108ccdjsn763672d05304',
//       'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
//     },
//   };

//   let respons = await fetch(
//     `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${param}`,
//     options
//   );
//   let data = await respons.json();

//   getAllDetailes = data;
//    let gamesArray = [getAllDetailes];

//   displayGameTitle(gamesArray);
// }

export class API {
  constructor() {
    this.baseURL = 'https://free-to-play-games-database.p.rapidapi.com/api/';
    this.headers = {
      'x-rapidapi-key': 'd5ff5d1dc2msh1816f4c242cc788p108ccdjsn763672d05304',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    };
  }

  async fetchGamesByCategory(category) {
    const response = await fetch(`${this.baseURL}games?category=${category}`, {
      method: 'GET',
      headers: this.headers,
    });
    return await response.json();
  }

  async fetchGameDetails(id) {
    const response = await fetch(`${this.baseURL}game?id=${id}`, {
      method: 'GET',
      headers: this.headers,
    });
    return await response.json();
  }
}
