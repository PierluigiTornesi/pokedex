const poke_container = document.querySelector(".poke-container")
const search = document.querySelector('.search')
const searchInput = document.querySelector('.searchInput')
const searchBtn = document.querySelector('.searchBtn')

/* COLORI BACKGROUND TIPI POKEMON */
const bg_color = {
    grass: '#8BD369',
    fire: '#FF603F',
    water: '#3399FF',
    bug: '#AABB22',
    normal: '#AAAA99',
    flying: '#9AA8FA',
    poison: '#B76EA4',
    electric: '#FFD34E',
    ground: '#E2C56A',
    fairy: '#F1A8EC',
    psychic: '#FF6EA4',
    fighting: '#C56E5C',
    rock: '#C5B679',
    dragon: '#7766EE',
    ice: '#66CCFF',
    steel: ' #60A1B8',
    ghost: '#704170',
    dark: '#50413F',
}

//first gen
const first_gen_button = document.getElementById('1');
const start_first_gen = 1;
const pokemon_first_gen = 151;

first_gen_button.addEventListener("click", () => {
    deletePokemon();
    changeBackground('first-gen');
    fetchPokemons(pokemon_first_gen,start_first_gen);
})

//second gen
const second_gen_button = document.getElementById('2');
const start_second_gen = 152;
const pokemon_second_gen = 251;

second_gen_button.addEventListener("click", () => {
    deletePokemon();
    changeBackground('second-gen');
    fetchPokemons(pokemon_second_gen,start_second_gen);
})

//terza gen
const third_gen_button = document.getElementById('3');
const pokemon_third_gen = 386;
const start_third_gen = 252;

third_gen_button.addEventListener("click", () => {
    deletePokemon();
    changeBackground('third-gen');
    fetchPokemons(pokemon_third_gen,start_third_gen);
})

//fourth gen
const fourth_gen_button = document.getElementById('4');
const start_fourth_gen = 387;
const pokemon_fourth_gen = 493;

fourth_gen_button.addEventListener("click", () => {
    deletePokemon();
    changeBackground('fourth-gen');
    fetchPokemons(pokemon_fourth_gen,start_fourth_gen);
})

//fifth gen
const fifth_gen_button = document.getElementById('5');
const start_fifth_gen = 494;
const pokemon_fifth_gen = 649;

fifth_gen_button.addEventListener("click", () => {
    deletePokemon();
    changeBackground('fifth-gen');
    fetchPokemons(pokemon_fifth_gen,start_fifth_gen);
})

//sixth gen
const sixth_gen_button = document.getElementById('6');
const start_sixth_gen = 650;
const pokemon_sixth_gen = 721

sixth_gen_button.addEventListener("click", () => {
    deletePokemon();
    changeBackground('sixth-gen');
    fetchPokemons(pokemon_sixth_gen,start_sixth_gen);
})

//seventh gen
const seventh_gen_button = document.getElementById('7');
const start_seventh_gen = 722
const pokemon_seventh_gen = 809

seventh_gen_button.addEventListener("click", () => {
    deletePokemon();
    changeBackground('seventh-gen');
    fetchPokemons(pokemon_seventh_gen,start_seventh_gen);
})

//eighth gen
const eighth_gen_button = document.getElementById('8');
const start_eighth_gen = 810
const pokemon_eighth_gen =  905


eighth_gen_button.addEventListener("click", () => {
    deletePokemon();
    changeBackground('eighth-gen');
    fetchPokemons(pokemon_eighth_gen,start_eighth_gen);
})

//ninth gen
const ninth_gen_button = document.getElementById('9');
const start_ninth_gen = 906
const pokemon_ninth_gen = 1025

ninth_gen_button.addEventListener("click", () => {
    deletePokemon();
    changeBackground('ninth-gen');
    fetchPokemons(pokemon_ninth_gen,start_ninth_gen);
})

/* button function */
searchBtn.addEventListener("click", () => {
    search.classList.toggle("active")
})
searchInput.addEventListener("input", (e) => {
    // console.log(searchInput.value)
    const searchValue = searchInput.value.toLowerCase()
    const pokemonNames = document.querySelectorAll(".poke-name")

    pokemonNames.forEach((pokemonName) => {
        pokemonName.parentElement.parentElement.style.display = 'block'

        if (!pokemonName.innerHTML.toLowerCase().includes(searchValue)) {
            pokemonName.parentElement.parentElement.style.display = 'none'
        }
    })
})

//fecth api
const fetchPokemons = async (pokemon_count,start) => {
    for (let i = start; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}
//get the response of api
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    //console.log(data);
    createPokemonCard(data)
}


//funzione che elimina i pokemon giá caricati
const deletePokemon = () => {
    poke_container.innerHTML = "";
}

//funzione che crea le card pokemon
const createPokemonCard = (pokemon) => {
    const pokemonDiv = document.createElement("div")
    pokemonDiv.classList.add("pokemon")

    const pokemonId = pokemon.id.toString().padStart(3, "0")
    const pokemonType = pokemon.types[0].type.name

    let pokemonType2 = '';
    //salvo il secondo tipo del pokemon nel caso lo abbia
    if(pokemon.types[1]){
        pokemonType2 =  pokemon.types[1].type.name
    }
    const pokemonBg = bg_color[pokemonType]
    pokemonDiv.style.backgroundColor = `${pokemonBg}`

    let pokemonInnerHTML = '';
    
    //veririco se il pokemon abbia o meno il secondo tipo
    //se non lo ha
    if(pokemonType2 === ''){
        pokemonInnerHTML = `
        <div class="image-container">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png" alt=" ${pokemon.name} image" />
              </div>
              <div class="poke-info">
                <span class="poke-id"># ${pokemonId}</span>
                <h3 class="poke-name">${pokemon.name}</h3>
                <div class="info">
                    <span class="poke-height">
                        <i class="fa-solid fa-ruler-vertical"></i> ${pokemon.height / 10} m
                    </span>
                    <span class="poke-weight">
                        <i class="fa-solid fa-weight-hanging"></i>  ${pokemon.weight / 10}Kg
                    </span>
                </div>
                <div class="poke-type">
                <img src="img/${pokemonType}.webp" alt=" ${pokemonType}" />
                </div>
              </div>
            </div> 
        `
    }else{
        //se lo ha
        pokemonInnerHTML = `
        <div class="image-container">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png" alt=" ${pokemon.name} image" />
              </div>
              <div class="poke-info">
                <span class="poke-id"># ${pokemonId}</span>
                <h3 class="poke-name">${pokemon.name}</h3>
                <div class="info">
                    <span class="poke-height">
                        <i class="fa-solid fa-ruler-vertical"></i> ${pokemon.height / 10} m
                    </span>
                    <span class="poke-weight">
                        <i class="fa-solid fa-weight-hanging"></i>  ${pokemon.weight / 10}Kg
                    </span>
                </div>
                <div class="poke-type">
                <img src="img/${pokemonType}.webp" alt=" ${pokemonType}" />
                <img src="img/${pokemonType2}.webp" alt=" ${pokemonType2}" />
                </div>
              </div>
            </div> 
        `
    }
    pokemonDiv.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonDiv)
}

//funzione che toglie la classe al body e aggiunge quella della gen cliccata
const changeBackground = (gen) => {
    const our_body = document.querySelector("body");
    our_body.classList.remove('bg-body','first-gen','second-gen','third-gen','fourth-gen','fifth-gen','sixth-gen','seventh-gen','eighth-gen','ninth-gen');
    our_body.classList.add(gen);
}

