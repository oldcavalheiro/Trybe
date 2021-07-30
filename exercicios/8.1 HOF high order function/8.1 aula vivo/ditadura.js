const pessoas = [
  "Chaves",
  "Chiquinha",
  "Kiko",
  "Seu Madruga",
  "Bruxa do 71",
  "Seu Barriga",
  "Professor Girafales",
  "Pópis",
  "Nhonho",
  "Godines",
];

console.table(pessoas);

function filtrar(pessoas, condicao) {
  if (typeof condicao !== "function") {
    throw new Error("O tipo do parâmetro 'condicao' deve ser 'function'.");
  }

  const acumulador = [];

  for (let index = 0; index < pessoas.length; index += 1) {
    const pessoa = pessoas[index];
    if (condicao(pessoa)) {
      acumulador.push(pessoa);
    }
  }

  return acumulador;
}

let pessoasFiltradas = filtrar(pessoas, (pessoa) => pessoa[0] !== "S");

pessoasFiltradas = filtrar(pessoasFiltradas, (nomePessoa) => {
  return nomePessoa[0] !== "C";
});

pessoasFiltradas = filtrar(pessoasFiltradas, function (pessoa) {
  return pessoa[0] !== "P";
});

pessoasFiltradas = filtrar(pessoasFiltradas, (pessoa) => pessoa.length <= 5);

console.table(pessoasFiltradas);

const pessoaDitadora = "Dona Florinda";
