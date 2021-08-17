function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}

function mapPokemonApiToMyModel(pokemonFromApi) {
  return {
    name: pokemonFromApi.name,
    imageUrl: pokemonFromApi.sprites.front_default,
  };
}

function mapAndShow(pokemonFromApi) {
  const pokemon = mapPokemonApiToMyModel(pokemonFromApi);
  append(pokemon);
}

function requestAndAppendPokemon(pokemonName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi));
}

function requestPokemon(pokemonName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json());
}

function fetchPokemon() {
  requestAndAppendPokemon('ditto');
  requestAndAppendPokemon('charmander');
  requestAndAppendPokemon('squirtle');
  requestAndAppendPokemon('charizard');
  requestAndAppendPokemon('onix');
}

/**
 * Abordagem Promise.all
 */
function fetchPokemonPromiseAllChain() {
  Promise.all([
    requestPokemon('ditto'),
    requestPokemon('charmander'),
    requestPokemon('squirtle'),
    requestPokemon('charizard'),
    requestPokemon('onix'),
  ])
    .then((pokemonListFromApi) => pokemonListFromApi.map(mapPokemonApiToMyModel))
    .then((pokemonList) => pokemonList.forEach(append))
    .catch((error) => console.log(error));
}

/**
 * Abordagem async / await
 * 
 * 
 * const arrowFunction = async () => {
 *
 * };
 */
async function fetchPokemonPromiseAllAsyncAwait() {
  try {
    const pokemonListFromApi = await Promise.all([
      requestPokemon('ditto'),
      requestPokemon('charmanderrrr'),
      requestPokemon('squirtle'),
      requestPokemon('charizard'),
      requestPokemon('onix'),
    ]);

    pokemonListFromApi.map(mapPokemonApiToMyModel)
      .forEach(append);
  } catch (error) {
    alert('ooops! Deu um erro!');
  }
}

/**
 * Abordagem de encadeamento de fetch / requests
 */
function fetchPokemonChain() {
  requestPokemon('ditto')
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.error(error))
    .then(() => requestPokemon('charmander'))
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.error(error))
    .then(() => requestPokemon('squirtle'))
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.error(error))
    .then(() => requestPokemon('charizard'))
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.error(error))
    .then(() => requestPokemon('onix'))
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.log(error));
}

/**
 * Abordagem async / await substituindo o encadeamento
 * 
 * DISCLAIMER: 🗣
 * 
 * Coloquei os eslint-disable abaixo apenas para que não atrapalhe a 
 * leitura do código.
 * 
 * O AVALIADOR VAI IGNORAR O MEU DISABLE E NÃO VAI FAZER PASSAR NA TASK
 * DO LINTER.
 * 
 * ⛔️ NÃO FAÇAM ISSO EM CASA! ⛔️
 */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
async function fetchPokemonChainAsyncAwait() {
  try {
    const pokemonFromApi = await requestPokemon('ditto');
    mapAndShow(pokemonFromApi);
  } catch (error) {
    console.error(error);
  }

  try {
    mapAndShow(await requestPokemon('charmanderrrrr'));
  } catch (error) {
    console.error(error);
  }

  try {
    mapAndShow(await requestPokemon('squirtle'));
  } catch (error) {
    console.error(error);
  }

  try {
    mapAndShow(await requestPokemon('charizard'));
  } catch (error) {
    console.error(error);
  }

  try {
    mapAndShow(await requestPokemon('onix'));
  } catch (error) {
    console.error(error);
  }
}

window.onload = fetchPokemonChainAsyncAwait;
