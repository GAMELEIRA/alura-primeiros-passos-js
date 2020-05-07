console.log('Trabalhando com listas');

const salvador = 'Salvador';

const saoPaulo = 'São Paulo';

const lista_destinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

lista_destinos.push('Curitiba');

console.log('Destinos possiveis');

console.log(salvador, saoPaulo);

console.log(lista_destinos);

//remove item
lista_destinos.splice(2, 1);

console.log(lista_destinos);

console.log(lista_destinos[1]);