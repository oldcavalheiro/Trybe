let API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      document.querySelector('#jokeContainer').innerText = data.joke
    );
}

window.onload = () => fetchJoke();