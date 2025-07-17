class Animal {
    constructor (nome, idade){
        this.nome = nome
        this.idade = idade
    }
    emitirSom(){
        return `Olá, eu sou o ${this.nome} e tenho ${this.idade} anos.`
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, raca) {
        super (nome, idade)
        this.raca = raca        
    }
    emitirSom(){
        return `${super.emitirSom()} Sou um cachorro de raça ${this.raca} e faço "Au Au"`
    }
}
class Gato extends Animal{
    constructor (nome, idade, corDoPelo){
        super (nome, idade)
        this.corDoPelo =corDoPelo
    }
    emitirSom(){
        return `${super.emitirSom()} Sou um gato e meu pelo é ${this.corDoPelo} e faço "Miau"`
    }
}

const meuCachorro = new Cachorro ('Luke', 12, 'Vira lata')
console.log(meuCachorro.emitirSom())
const meuGato = new Gato ('Felix', 40, 'Preto')
console.log(meuGato.emitirSom())