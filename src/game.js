class Game {
    constructor(game) {
        this.id = game.id
        this.title = game.attributes.title
        this.genre = game.attributes.genre
        this.skill_level = game.attributes.skill_level
        this.game_name = game.attributes.game_name
        this.gameId = game.relationships.player.data.id
        this.players = game.players

        allGames.push(this)
        //Game.all.push(this)
        //console.log(this);
    }
}