// Ojetivo:
//  Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
//    Se XP for menor do que 1.000 = Ferro
//    Se XP for entre 1.001 e 2.000 = Bronze
//    Se XP for entre 2.001 e 5.000 = Prata
//    Se XP for entre 6.001 e 7.000 = Ouro
//    Se XP for entre 7.001 e 8.000 = Platina
//    Se XP for entre 8.001 e 9.000 = Ascendente
//    Se XP for entre 9.001 e 10.000= Imortal
//    Se XP for maior ou igual a 10.001 = Radiante


// Declaração de variáveis:
let nomeHeroi = "Skye" //Variável com o nome do herói.
let xpHeroi = 10001 //Variável com o XP do herói.
let nivelHeroi = "" //Variável em branco para o nível do herói.

// Estrutura de decisões:
if (xpHeroi <= 1000) {   //Feita a verificação do poder do herói se é abaixo de 1.000.
    nivelHeroi = "Ferro"
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {  //Feita a verificação do poder do herói se é entre 1.001 e 2.000.
    nivelHeroi = "Bronze"
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {  //Feita a verificação do poder do herói se é entre 2.001 e 5.000.
    nivelHeroi = "Prata"
} else if (xpHeroi >= 5001 && xpHeroi <= 6000) {  //Feita a verificação do poder do herói se é entre 5.001 e 6.000.
    nivelHeroi = "Ouro"
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {  //Feita a verificação do poder do herói se é entre 6.001 e 7.000.
    nivelHeroi = "Platina"
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {  //Feita a verificação do poder do herói se é entre 7.001 e 8.000.
    nivelHeroi = "Diamante" //Adicionei esse nível para ficar mais bonito...
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {  //Feita a verificação do poder do herói se é entre 8.001 e 9.000.
    nivelHeroi = "Ascendente"
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) { //Feita a verificação do poder do herói se é entre 9.001 e 10.000.
    nivelHeroi = "Imortal"
} else { //Aqui para a verificação restante, aonde o poder não foi verdadeiro em nenhuma das condições anteriores. Pela lógica aqui o herói terá mais de 10.000 de poder.
    nivelHeroi = "Radiante"
}

// Por fim, o algortimo exibe na tela o nome, xp e o nível em que o herói está.
console.log("O Herói de nome " + nomeHeroi + " com XP " + xpHeroi + " está no nível " + nivelHeroi + ".")