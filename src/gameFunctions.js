class Player {
    constructor(player) {
        this.id = player.id
        //debugger
        this.name = player.name
        this.city = player.city
        this.state = player.state
        this.games = [];

        //this.title = playerAtt.games.title

        allPlayers.push(this)
        //Player.all.push(this)
        //console.log(this);

    }

    render() {
        const h2 = document.createElement("h2");
        const h4 = document.createElement("h4");
        const a = document.createElement("a");

        a.setAttribute('href', '#')
        a.innerHTML = '${this.name}'

        a.addEventListener("click", function (e){
            playersContainer.textContent = "";

            let playerFilter = allPlayers.filter(function (player) {
                return e.target.innerText.toLowerCase() === player.name.toLowerCase()
            })

            playerFilter.forEach(player => {
                createPlayerForm(player)

                h2.textContent = player.name
                h4.textContent = "Games"
                playersContainer.appendChild(h2)
                playersContainer.appendChild(h4)

                listGames(player);
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
}