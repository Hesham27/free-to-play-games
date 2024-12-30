   
   
 
//    import {getDetiles} from "./gametittle.js";
//    import { allData } from "./index.js";
//    export function displayGame() {
//     let cartona = '';
//     for (let i = 0; i < allData.length; i++) {
//       cartona += `
//         <div class="col-xl-3 col-lg-4 col-md-6 border-5">
//           <div class="card gameCard" data-id="${allData[i].id}">
//             <img
//               src="${allData[i].thumbnail}"
//               class="card-img-top p-3"
//               alt=""
//             />
//             <div class="d-flex justify-content-between px-2">
//               <h5 class="card-title fs-6 text-white">${allData[i].title}</h5>
//               <button class="btnc">
//                 <a class="text-decoration-none" href="#"> free</a>
//               </button>
//             </div>
//             <div>
//               <p class="card-text text-center">
//               ${allData[i].short_description}
//               </p>
//             </div>
//             <div class="cardFotter border-top border-black text-white d-flex justify-content-between mt-2 pt-3 px-2">
//               <span>${allData[i].genre}</span>
//               <span>${allData[i].platform}</span>
//             </div>
//           </div>
//         </div>
//       `;
//     }
  
//     document.getElementById('gameRow').innerHTML = cartona;
  
   
//     document.getElementById('gameRow').addEventListener('click', function(e) {
//       const card = e.target.closest('.gameCard');
//       if (card) {
//         const gameId = card.getAttribute('data-id'); 
//         getDetiles(gameId); 
//       }
//     });
//   }

// export function displayGameTitle(gamesArray) {
//     let boxTitle = '';
//     for (let i = 0; i < gamesArray.length; i++) {
//       const game = gamesArray[i];
//       boxTitle += `
//         <div class="container detali">
//           <div class="header d-flex justify-content-between align-items-center mx-2">
//             <h1>Details Game</h1>
//             <button id="close" type="button" class="btn-close" aria-label="Close"></button>
//           </div>
//           <div class="row">
//             <div class="col-md-4 col-12">
//               <img src="${game.thumbnail}" class="w-100" alt="" />
//             </div>
//             <div class="col-md-8 col-12 pageSpan text-uppercase">
//               <h3>Title: ${game.title}</h3>
//               <p>Category: <span>${game.genre}</span></p>
//               <p>Platform: <span>${game.platform}</span></p>
//               <p>Status: <span>${game.status}</span></p>
//               <p>${game.description}</p>
//               <button type="button" class="btn btn-outline-warning text-white">
//                 <a class="text-white text-decoration-none" href="${game.freetogame_profile_url}">Show Game</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       `;
//     }
  
//     document.getElementById('gameRow').innerHTML = boxTitle;
  
//     document.getElementById('close').addEventListener('click', function() {
//        displayGame()
//     });
//   }

export class UI {
  showLoader() {
    const gameRow = document.getElementById('gameRow');
    gameRow.innerHTML = `
      <div class="vh-100 d-flex justify-content-center align-items-center">
        <span class="loader"></span>
      </div>
    `;
  }

  displayGame(games, onGameClick) {
    let cartona = '';
    games.forEach((game) => {
      cartona += `
        <div class="col-xl-3 col-lg-4 col-md-6 border-5">
          <div class="card gameCard" data-id="${game.id}">
            <img src="${game.thumbnail}" class="card-img-top p-3" alt="" />
            <div class="d-flex justify-content-between px-2">
              <h5 class="card-title fs-6 text-white">${game.title}</h5>
              <button class="btnc">
                <a class="text-decoration-none" href="#"> free</a>
              </button>
            </div>
            <div>
              <p class="card-text text-center">${game.short_description}</p>
            </div>
            <div class="cardFotter border-top border-black text-white d-flex justify-content-between mt-2 pt-3 px-2">
              <span>${game.genre}</span>
              <span>${game.platform}</span>
            </div>
          </div>
        </div>
      `;
    });

    const gameRow = document.getElementById('gameRow');
    gameRow.innerHTML = cartona;

    gameRow.addEventListener('click', (e) => {
      const card = e.target.closest('.gameCard');
      if (card) {
        const gameId = card.getAttribute('data-id');
        onGameClick(gameId);
      }
    });
  }

  displayGameTitle(gamesArray, onClose) {
    let boxTitle = '';
    gamesArray.forEach((game) => {
      boxTitle += `
        <div class="container detali">
          <div class="header d-flex justify-content-between align-items-center mx-2">
            <h1>Details Game</h1>
            <button id="close" type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <div class="row">
            <div class="col-md-4 col-12">
              <img src="${game.thumbnail}" class="w-100" alt="" />
            </div>
            <div class="col-md-8 col-12 pageSpan text-uppercase">
              <h3>Title: ${game.title}</h3>
              <p>Category: <span>${game.genre}</span></p>
              <p>Platform: <span>${game.platform}</span></p>
              <p>Status: <span>${game.status}</span></p>
              <p>${game.description}</p>
              <button type="button" class="btn btn-outline-warning text-white">
                <a class="text-white text-decoration-none" href="${game.freetogame_profile_url}">Show Game</a>
              </button>
            </div>
          </div>
        </div>
      `;
    });

    const gameRow = document.getElementById('gameRow');
    gameRow.innerHTML = boxTitle;

    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', onClose);
  }
}

