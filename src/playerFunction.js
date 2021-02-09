let allPlayers = [];
let allGames = [];

function fetchPlayers() {
    return fetch(PLAYERS_URL)
        .then(res => res.json())
        .then(json => {
            renderPlayers(json)
        })
}

function renderPlayers(json) {
    json.data.forEach(player => {
        let newPlayer = new Player(player.attributes)

        let players = json.included.filter(player => {
            return player.attributes.player_id === newPlayer.id
        })

        createGames(newPlayer, players)
        addPlayer(newPlayer)
    })
}

function addPlayer(player) {
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4");
    const a = document.createElement("a");

    a.setAttribute('href', '#')
    a.innerHTML = `${player.name}`

    a.addEventListener("click", function (e) {
        playersContainer.textContent = "";

        let playerFilter = allPlayers.filter(function (player) {
            return e.target.innerText.toLowerCase() === player.name.toLowerCase()
        })

        playerFilter.forEach(player => {
            createGameForm(player)

            h2.textContent = player.name
            h4.textContent = "Games"

            playersContainer.appendChild(h2)
            playersContainer.appendChild(h4)

            listGames(player)
        })
    })

    h2.appendChild(a)

    playersContainer.appendChild(playerWrapper)
    playerWrapper.appendChild(h2)

    const playerCityEl = document.createElement("ul")
    playerCityEl.innerHTML = 'City: ${this.city}'
    h2.appendChild(playerCityEl)

    const playerStateEl = document.createElement("ul")
    playerStateEl.innerHTML = 'State: ${this.state}'
    h2.appendChild(playerStateEl)
}

function savePlayer(player) {
    return (
        fetch(PLAYERS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(player)
        })
    ).then(res => res.json())
        .then(json => {
            let newPlayer = new Player(json.data.attributes)
            newPlayer.render()
        })

}