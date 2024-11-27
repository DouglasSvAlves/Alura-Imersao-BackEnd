alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

// Operadores - Igual ( == ) - Não igual ( != ) - Maior ( > ) - Menor ( < ) - E ( && ) - OU ( || ) - Menor ou igual ( <= ) - Maior ou igual ( >= ) - NEGAÇÂO ( ! ) Ex: !(A == B) verdadeiro se A NÂO for igual a B 

//Enquanto chute não for igual ao N.Secreto
while (chute != numeroSecreto ) {
    chute = prompt('Escolha um número entre 1 e 10');
    // if (tentativas > 1) {
    //     tentativas = tentativas + 1;
    // }

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        console.log(chute == numeroSecreto);
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} vezes`);
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
    }
    //tentativas = tentativas + 1; (é a mesma coisa do código a baixo, só que ele é menos usado no dia a dia)
    tentativas++;
}

