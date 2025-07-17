class Pessoa {
    constructor (nome, idade, cpf){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }
    apresentar (){
        return `Meu nome é ${this.nome} e tenho ${this.idade}`
    }
}

class Estudante extends Pessoa {
    constructor (nome, idade, cpf, matricula){
        super (nome, idade, cpf)
        this.matricula = matricula
    }
    estudar(){
        return `${this.nome}, ${this.matricula} está estudando`
    }
    apresentar() {
        return `${super.apresentar()} Sou estudante com matrícula ${this.matricula}.`;
    }
}
const estudanteJoao = new Estudante("João Silva", 20, "111.222.333-44", "2023001")
console.log(estudanteJoao.apresentar())
console.log(estudanteJoao.estudar())