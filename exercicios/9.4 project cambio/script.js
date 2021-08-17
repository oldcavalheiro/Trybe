function renderRate(currency) {
  const currencyList = document.querySelector('#currency-list');
  const li = document.createElement('li');
  li.innerHTML = `<strong>${currency.code}:</strong> ${currency.rate}`;
  currencyList.appendChild(li);
}

function updateBaseCurrency(baseCurrencyCode) {
  document.querySelector('#currency-base')
    .innerHTML = `Valores referentes a 1 ${baseCurrencyCode}`;
}

async function getRatesFromBaseCurrency(baseCurrencyCode) {
  const response = await fetch(`https://api.exchangerate.host/latest?base=${baseCurrencyCode}`);
  const json = await response.json();
  return json;
}

const OBJECT_KEY = 'currencyObject';

async function getLocalStorage() {
  return JSON.parse(localStorage.getItem(OBJECT_KEY));
}

async function saveLocalStorage(object) {
  localStorage.setItem(OBJECT_KEY, JSON.stringify(object));
}

function mapAndRenderResult(result) {
  Object.entries(result.rates)
    .forEach((currencyRate) => {
      const code = currencyRate[0];
      const rate = currencyRate[1];

      const obj = {
        code,
        rate,
      };

      renderRate(obj);
    });
}

async function onClickSearchButton() {
  const currencyInput = document.querySelector('#currency-input');
  const result = await getRatesFromBaseCurrency(currencyInput.value);
  
  updateBaseCurrency(result.base);
  await saveLocalStorage(result);
  mapAndRenderResult(result);
}

window.onload = async () => {
  document.querySelector('#search-button')
    .addEventListener('click', onClickSearchButton);
  
  const storedObject = await getLocalStorage();

  updateBaseCurrency(storedObject.base);
  mapAndRenderResult(storedObject);
};
