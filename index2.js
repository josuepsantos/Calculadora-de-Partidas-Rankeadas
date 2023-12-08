function calcularElo(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível do jogador com base no saldo de vitórias
    let nivel;
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias > 101) {
        nivel = "Imortal";
    }

    // Exibe a mensagem com o saldo de vitórias e o nível
    console.log("O Herói tem um saldo de " + saldoVitorias + " vitórias e está no nível " + nivel);
}

// Exemplo de uso da função com os dados do jogador
for (let i = 0; i <= 110; i += 10) {
    calcularElo(10 + i, 10);
}
