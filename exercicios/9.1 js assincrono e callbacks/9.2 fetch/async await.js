const fetch = require('node-fetch');
// https://icanhazdadjoke.com/api

// async - await
// function get promise-based behavior

// async means code keep going and wont wait this function return 
async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json()) // transforma o retorno em um JSON
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

// try console.log without return of verifiedFetch // Promise { <pending> }
// await wait the return of verifiedFetch
async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");