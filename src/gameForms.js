let formPlacement = document.querySelector('div.form-placement')

const createGameForm = (game) => {
    formPlacement.textContent = '';
    const form = document.createElement('form')
    form.setAttribute('data-id', player.id)
    const formSubmit = document.createElement('button')
    formSubmit.textContent = "Create Game"

    form.id = 'create-game'
    formSubmit.id = 'form-submit'

    let titleInput = document.createElement('input')
    titleInput.setAttribute('title', 'title')
    titleInput.placeholder = "Game Title"
    form.appendChild(titleInput)

    let genreInput = document.createElement('input')
    genreInput.setAttribute('title', 'genre')
    genreInput.placeholder = "Game Genre"
    form.appendChild(genreInput)

    let skillLevelInput = document.createElement('input')
    skillLevelInput.setAttribute('title', 'skillLevel')
    skillLevelInput.placeholder = "Game Skill Level"
    form.appendChild(skillLevelInput)

    let gameNameInput = document.createElement('input')
    gameNameInput.setAttribute('title', 'gameName')
    gameNameInput.placeholder = "In Game Name"
    form.appendChild(gameNameInput)


    form.appendChild(formSubmit)

    formPlacement.appendChild(form)
    gamesContainer.appendChild(formPlacement)

    document.querySelector('#create-game').addEventListener("submit", formHandler)


}

function formHandler(e) {
    e.preventDefault();
    let gameData = {
        player_id: e.target.dataset.id,
        title: e.target.elements.title.value,
        genre: e.target.elements.genre.value,
        skill_level: e.target.skill_level.value,
        game_name:e.target.game_name.value,
    }

    saveGame(gameData)

    e.target.elements.title.value = '';
    e.target.elements.genre.value = '';
    e.target.elements.skill_level.value = '';
    e.target.elements.game_name.value = '';

    addGame(gameData)
}

function addGame(game) {
    const h3 = document.createElement("h3")
    h3.innerHTML = `${game.title}`.charAt(0).toUpperCase() + `${game.genre}`.slice(1)
    gamesContainer.appendChild(gameWrapper)
    playerWrapper.appendChild(h3)

    const gameSkillLevelEl = document.createElement("ul")
    gameSkillLevelEl.innerHTML = "Skill Level: " + `${game.skill_level}`.charAt(0).toUpperCase() + `${game.skill_level}`.slice(1)
    h3.appendChild(gameSkillLevelEl)

    const gameNameEl = document.createElement("ul")
    gameNameEl.innerHTML = "In Game Name: " + `${game.game_name}`.charAt(0).toUpperCase() + `${game.game_name}`.slice(1)
}

