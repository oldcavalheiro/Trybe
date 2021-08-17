function blockEventLoop(durationInMs) {
  let now = new Date().getTime();
  const futureTime = now + durationInMs;

  while (now < futureTime) {
    now = new Date().getTime();
  }
}

// blockEventLoop(5_000);

const bigTasty = {
  name: 'Big Tasty',
  imageUrl: 'images/big-tasty.png',
};

const bigMac = {
  name: 'Big Mac',
  imageUrl: 'images/big-mac.png',
};

function append(data) {
  const ol = document.querySelector('ol');
  
  const li = document.createElement('li');
  const divName = document.createElement('div');
  divName.innerHTML = data.name;
  li.appendChild(divName);
  
  if (data.imageUrl) {
    const divImage = document.createElement('div');
    const img = document.createElement('img');
    img.src = data.imageUrl;
    divImage.appendChild(img);
    li.appendChild(divImage);
  }

  ol.appendChild(li);
}

function log(text) {
  append({ name: text });
}

function order(productId, onProductReady) {
  setTimeout(() => {
    let product;

    switch (productId) {
    case 1:
      product = bigMac;
      break;
    case 2:
      product = bigTasty;
      break;
    default:
      product = bigMac;
      break;
    }

    onProductReady(product);
  }, Math.random() * 2_000);
}

log('FAZER PEDIDOS');

order(1, (product) => {
  console.log(product);
  append(product);
});
order(2, (product) => {
  console.log(product);
  append(product);
});

log('LIBERADO O ROLÊ NO SHOPPING...');