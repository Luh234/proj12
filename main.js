class Personagem {
  constructor(nome) {
      this.nome = nome;
      this.vida = 6; // 6 corações
      this.forca = 1; // Força inicial
      this.recursos = {
          dinheiro: 0,
          poções: 0,
      };
  }

  mostrarStatus() {
      console.log(`Status de ${this.nome}:`);
      console.log(`Vida: ${this.vida} corações`);
      console.log(`Força: ${this.forca}`);
      console.log(`Dinheiro: ${this.recursos.dinheiro}`);
      console.log(`Poções: ${this.recursos.poções}`);
  }

  enfrentarDesafio() {
      const desafio = Math.random();
      if (desafio < 0.5) {
          console.log(`${this.nome} encontrou um inimigo!`);
          this.vida -= 1;
          console.log(`Você perdeu 1 coração!`);
      } else {
          console.log(`${this.nome} encontrou uma poção!`);
          this.recursos.poções += 1;
          console.log(`Você ganhou uma poção!`);
      }
  }

  usarPocao() {
      if (this.recursos.poções > 0) {
          this.vida += 1;
          this.recursos.poções -= 1;
          console.log(`Você usou uma poção e ganhou 1 coração!`);
      } else {
          console.log(`Você não tem poções disponíveis!`);
      }
  }

  estaVivo() {
      return this.vida > 0;
  }
}

function start() {
  const personagem = new Personagem("Aventurinha");
  let rodada = 1;

  console.log("Iniciando o jogo...");

  while (personagem.estaVivo()) {
      console.log(`\nRodada ${rodada}`);
      personagem.mostrarStatus();

      const acao = prompt("Escolha uma ação: 1) Enfrentar desafio 2) Usar poção (digite 1 ou 2): ");

      if (acao === '1') {
          personagem.enfrentarDesafio();
      } else if (acao === '2') {
          personagem.usarPocao();
      } else {
          console.log("Ação inválida. Tente novamente.");
      }

      rodada++;
  }

  console.log(`${personagem.nome} foi derrotado! Fim do jogo.`);
}

// Chama a função start para iniciar o jogo
start();
