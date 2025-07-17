class Jogador {
    constructor(nome, vida, ataque) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
    }

    atacar(alvo) {
        console.log(`${this.nome} ataca ${alvo.nome} causando ${this.ataque} de dano.`);
        alvo.vida -= this.ataque;
        console.log(`${alvo.nome} agora tem ${alvo.vida} de vida.`);
    }
}

class Guerreiro extends Jogador {
    constructor(nome, vida, ataque, forca) {
        super(nome, vida, ataque);
        this.forca = forca;
    }

    atacar(alvo) { // Sobrescreve para usar a força
        const danoTotal = this.ataque + this.forca;
        console.log(`${this.nome} (Guerreiro) ataca ${alvo.nome} com força, causando ${danoTotal} de dano.`);
        alvo.vida -= danoTotal;
        console.log(`${alvo.nome} agora tem ${alvo.vida} de vida.`);
    }
}

class Mago extends Jogador {
    constructor(nome, vida, ataque, mana) {
        super(nome, vida, ataque);
        this.mana = mana;
    }

    lancarFeitico(alvo) {
        const custoMana = 20;
        const danoFeitico = 30;
        if (this.mana >= custoMana) {
            this.mana -= custoMana;
            console.log(`${this.nome} (Mago) lança um feitiço em ${alvo.nome} causando ${danoFeitico} de dano.`);
            alvo.vida -= danoFeitico;
            console.log(`${alvo.nome} agora tem ${alvo.vida} de vida. Mana restante: ${this.mana}`);
        } else {
            console.log(`${this.nome} não tem mana suficiente para lançar o feitiço.`);
        }
    }
}

// Exemplo de uso
const heroi = new Guerreiro("Aragorn", 100, 15, 10);
const inimigo = new Jogador("Goblin", 50, 5);
const feiticeiro = new Mago("Gandalf", 80, 10, 100);

heroi.atacar(inimigo);
feiticeiro.lancarFeitico(inimigo);
feiticeiro.lancarFeitico(inimigo);