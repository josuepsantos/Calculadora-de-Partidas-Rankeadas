// Salvando dados do player em variáveis...
let playerName = "SereiaTristeza";
let winNumber = 0;
let loseNumber = 5;
let level = 0;

// Loop para simular partidas e fazer o player subir de level
for (let i = 0; i < 11; i++) {
    winNumber += 10;

    // Calculando o novo level com base no número de vitórias
    level = 0;
    for (let j = 0; j <= winNumber; j += 10) {
        level += j;
    }

    // Determinando o novo level com base no número de vitórias
    if (winNumber <= 10) {
        console.log("O Herói tem um saldo de " + winNumber + " de vitórias e está no elo Ferro");
    } else if (winNumber >= 11 && winNumber <= 20) {
        console.log("O Herói tem um saldo de " + winNumber + " de vitórias e está no elo Bronze");
    } else if (winNumber >= 21 && winNumber <= 50) {
        console.log("O Herói tem um saldo de " + winNumber + " de vitórias e está no elo Prata");
    } else if (winNumber >= 51 && winNumber <= 80) {
        console.log("O Herói tem um saldo de " + winNumber + " de vitórias e está no elo Ouro");
    } else if (winNumber >= 81 && winNumber <= 90) {
        console.log("O Herói tem um saldo de " + winNumber + " de vitórias e está no elo Diamante");
    } else if (winNumber >= 91 && winNumber <= 100) {
        console.log("O Herói tem um saldo de " + winNumber + " de vitórias e está no elo Lendário");
    } else if (winNumber >= 101) {
        console.log("O Herói tem um saldo de " + winNumber + " de vitórias e está no elo Imortal");
    }
}

// Criando função para...
function somarWin(winNumber, loseNumber) {
    return winNumber - loseNumber;
}

let resultado = somarWin(winNumber, loseNumber);
console.log(playerName + " tem " + resultado + " de vitórias" + " e o seu nível total é: " + level);