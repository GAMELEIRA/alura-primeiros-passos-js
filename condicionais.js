console.log('Trabalhando com listas');

const lista_destinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

const idadeComprador = 17;

console.log('Destinos possiveis');

console.log(lista_destinos);

if (idadeComprador >= 18) {

    console.log("Comprador maior de idade");

    lista_destinos

    //remove item
    lista_destinos.splice(2, 1);


} else {

    console.log("Não é maior de idade e não vender");
}

console.log(lista_destinos);