const BACKEND_URL = "http://localhost:3000";
const PLAYERS_URL = `${BACKEND_URL}/api/v1/players`;
const GAMES_URL = `${BACKEND_URL}/api/v1/games`;

let playersContainer = document.querySelector('div.player-container')
let gamesContainer = document.querySelector('div.games-container')
let playerWrapper = document.createElement("div")
let gameWrapper = document.createElement("div")
playerWrapper.id = 'player-wrapper'
gameWrapper.id = 'game-wrapper'

let homeButton = document.querySelector('#home')
    homeButton.addEventListener("click", function () {
        gamesContainer.textContent = ''
        loadPage()
    })

function loadPage() {
    playersContainer.textContent = ''
    gamesContainer.textContent = ''
    playerWrapper.textContent = ''
    gameWrapper.textContent = ''

    createPlayerForm();
    fetchPlayers();

    playersContainer.appendChild((createPlayerForm());

    document.querySelector('#create-player').addEventListener("submit", function (e){
        e.preventDefault();

        let playerInfo = {
            e.target.elements.name.value = '';
            e.target.elements.city.value = '';
            e.target.elements.state.value = '';

            savePlayer(playerInfo)
        })
    })
}

loadPage()

