const { cervejas, pedidos, entregas } = require('../data');

console.table(cervejas);
console.table(pedidos);
console.table(entregas);

/*
 * 3. Criar um array de objetos com as seguintes informações
 *
 * - id do pedido
 * - descriçao da cerveja
 * - quantidade de cervejas do pedido
 * - placa do veiculo que vai fazer a entrega
 */

const mapper = (accumulator, currentValue) => {
  const cerveja = cervejas
    .find((value) => value.codigo === currentValue.codigoCerveja);

  const entrega = entregas
    .find((value) => value.pedidoId === currentValue.id);

  /**
   * Neste cenário, o novo objeto pode ser criado desta forma,
   * com o nome da chave fixa, pois os nomes das chaves já são
   * conhecidos em tempo de desenvolvimento.
   */
  const objetoPedido = {
    id: currentValue.id,
    descricaoCerveja: cerveja.descricao,
    qnt: currentValue.quantidade,
    veiculoEntrega: entrega.placaVeiculo,
  };

  accumulator.push(objetoPedido);

  return accumulator;
};

/**
 * Importante passar o parâmetro `initialValue` com um array vazio
 * (`[]`) para que o `accumulator` se inicie com um array, e não com
 * um objeto do array original.
 */
const output = pedidos.reduce(mapper, []);

console.table(output);
