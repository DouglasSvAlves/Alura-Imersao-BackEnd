// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// console.log(numeroSecreto);
// let chute = prompt('Escolha um número entre 1 e 10');
// let respChute = parseInt(chute, 10)


// if (chute == numeroSecreto) {
//     alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto})`);
// } else {
//     alert('Você Errou :(');
//     // if (chute >= numeroSecreto) {
//     //     alert('O Número Secreto é menor');
//     // } else {
//     //     alert('O Número Secreto é maior');
//     // }
// }

// // while (respChute !== numeroSecreto) {
// //     alert('Você Errou :(');
// //     if (respChute > numeroSecreto) {
// //         alert('O Número Secreto é menor');
// //     } else {
// //         alert('O Número Secreto é maior');
// //     }
// //     chute = prompt('Escolha um número entre 1 e 10'),
// //     respChute = parseInt(chute, 10)
// //     // respChute = atualizarValor(respChute);
// // }

// //Essa é outra maneira de se fazer

// // function atualizarValor(valor) {
// //     if (valor !== numeroSecreto) {
// //         return chute = prompt('Escolha um número entre 1 e 10'),
// //         respChute = parseInt(chute, 10);
// //     } else {
// //         return 
// //     }
// // }

//Exercicio

diaSemana = prompt('Que dia é hoje?');

if (diaSemana == 'Sábado' || diaSemana == 'Domingo') {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}

numero = prompt('Digite um número:');

if (numero < 0 ) {
    alert('É um número negativo');
} else {
    alert('É um número possitivo');
}

nome = prompt('Qual o seu nome?');

alert(`Bem vindo ${nome}`);
alert('Bem vindo ' + nome);
    