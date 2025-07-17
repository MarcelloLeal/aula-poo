class Pessoa {
    #nome
    constructor (nome, idade){
        this.#nome = nome
        this.idade = idade
    }
    apresentar (){
        console.log(`Meu nome é ${this.#nome}`)
    }
}

const p1 = new Pessoa ('Marcelo', 50)
p1.apresentar()
console.log(p1.idade)