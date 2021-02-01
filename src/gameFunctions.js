function saveGame(gameData) {
    let game = {
        player_id: gameData.player_id,
        title: gameData.title,
        genre: gameData.genre,
        skill_level: gameData.skill_level,
        game_name: gameData.game_name
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(game)
    };

    return fetch(GAMES_URL, configObj)
        .then(res => res.json())
        .then(obj => {
            console.log(obj)
    })
}

function renderGames(gamesArray, player_id) {
    gamesArray.forEach(game => {
        let newGame = new Game(game)
    })
}

function createGames(player, gamesArray) {
    gamesArray.forEach(game => {
        let newGame = new Game(game)
        player.games.push(newGame)
    })
}

function fetchGames(player_id) {
    return fetch(GAMES_URL)
        .then(res => res.json())
        .then(game => {
            renderGames(game.data, player_id);
        })
}

function listGames(player) {
    gameWrapper.textContent = '';
    player.games.forEach(game => {
        addGame(Game)
    })
}