console.log('Trabalhando com listas');

let temPassagemComprada = false;

const estaAcompanhada = false;

const destino = "Salvador";

const lista_destinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

const idadeComprador = 17;

console.log('Destinos possiveis');

console.log(lista_destinos);

const pode_comprar = (idadeComprador >= 18 && !estaAcompanhada);

let contador = 0;

let destino_existe = 0;

while (contador < lista_destinos.length) {

    lista_destinos[contador] == destino;

    if (lista_destinos[contador] == destino) {

        console.log("Destino existe");

        destino_existe = true;

        break;

    } else {

        console.log("Destino não existe!");

    }

    contador += 1;

}

console.log("Destino existe: ", destino_existe);


if (pode_comprar && destino_existe) {


}