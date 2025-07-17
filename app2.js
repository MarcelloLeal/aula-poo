class Pessoa {
    constructor (nome, idade, cpf){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }
    apresentar (){
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

class Estudante extends Pessoa {
    constructor (nome, idade, cpf, matricula){
        super (nome, idade, cpf)
        this.matricula = matricula
    }
    estudar (){
        return `${this.nome} matrícula ${this.matricula} está estudando.`
    }
    apresentar (){
        return `${super.apresentar()} Sou estudante com matrícula ${this.matricula}`
    }
}
class Professor extends Pessoa{
    constructor (nome, idade, cpf, disciplina){
        super (nome, idade, cpf)
        this.disciplina = disciplina
    }
    ensinar(){
        return `${this.nome} está ensinando ${this.disciplina}`
    }
}

const estudanteJoao = new Estudante ('João', 20, '111.222.333-44', 'MAC09876')
const professorRaimundo = new Professor ('Raimundo', 60, '000.000.000-00', 'A arte do riso')
console.log(estudanteJoao.apresentar())
console.log(estudanteJoao.estudar())
console.log(professorRaimundo.ensinar())