const createPlayerForm = () => {

    const form = document.createElement('form')
    const formSubmit = document.createElement('button')

    formSubmit.textContent = "Add New Player Info"
    form.id = "create-player"
    formSubmit.id = "form-submit"

    const currentPlayerGames = document.createElement('h2')
    currentPlayerGames.textContent = "What Players Are Playing"

    let nameInput = document.createElement("input")
    nameInput.setAttribute('name', 'name')
    nameInput.placeholder = "Your Name"
    form.appendChild(nameInput)

    let cityInput = document.createElement("input")
    cityInput.setAttribute('name', 'city')
    cityInput.placeholder = "City"
    form.appendChild(cityInput)

    let stateInput = document.createElement("input")
    stateInput.setAttribute('name', 'state')
    stateInput.placeholder = "State"
    form.appendChild(stateInput)

    form.appendChild(formSubmit)

    form.appendChild(currentPlayerGames)

    return form
}