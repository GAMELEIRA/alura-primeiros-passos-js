console.log('Trabalhando com listas');

const estaAcompanhada = false;

const lista_destinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

const idadeComprador = 17;

console.log('Destinos possiveis');

console.log(lista_destinos);

if (idadeComprador >= 18 && !estaAcompanhada) {

    console.log("Comprador maior de idade");

    lista_destinos

    //remove item
    lista_destinos.splice(2, 1);


} else {

    console.log("Não é maior de idade e não vender");

}

console.log("Hora do embarque: \n \n");

if (idadeComprador > 18 && temPassagemComprada) {

    console.log("Boa viagem");

} else {

    console.log("Você não pode embarcar");

}



console.log(lista_destinos);