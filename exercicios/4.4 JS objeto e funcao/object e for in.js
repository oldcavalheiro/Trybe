let info = {
   personagem: 'Margarida',
   origem: 'Pato Donald',
   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1. bem vinda margarida
console.log("bem vinda " + info.personagem);

// 2. adicionar recorrente: 'Sim' no objeto
info['recorrente'] = 'sim';
console.log(info);

// 3. for/in que mostre todas as chaves do objeto.
// 4. for/in que mostre todos os valores das chaves do objeto.
for (let key in info) {
    console.log("3." + key, "  4. " + info[key]);
}
