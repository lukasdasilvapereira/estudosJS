async function dataPokemons() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
        const pokemonSprite = document.getElementById("pokemonSprite")

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const obj = await response.json()
        const poke = obj.sprites.front_default
        pokemonSprite.src = poke
        pokemonSprite.style.display = "block"
    } catch (error) {
        console.log(error)
    }
}

