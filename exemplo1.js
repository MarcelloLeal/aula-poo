class Pessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu CPF é ${this.cpf}.`;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, cpf, matricula) {
        super(nome, idade, cpf); // Chama o construtor da classe Pessoa
        this.matricula = matricula;
    }

    estudar() {
        console.log(`${this.nome} (Matrícula: ${this.matricula}) está estudando muito!`);
    }

    // Opcional: Sobrescrever o método apresentar para incluir a matrícula
    apresentar() {
        return `${super.apresentar()} Sou estudante com matrícula ${this.matricula}.`;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, cpf, disciplina) {
        super(nome, idade, cpf); // Chama o construtor da classe Pessoa
        this.disciplina = disciplina;
    }

    ensinar() {
        console.log(`${this.nome} está ensinando a disciplina de ${this.disciplina}.`);
    }

    // Opcional: Sobrescrever o método apresentar para incluir a disciplina
    apresentar() {
        return `${super.apresentar()} Sou professor(a) de ${this.disciplina}.`;
    }
}

class FuncionarioAdministrativo extends Pessoa {
    constructor(nome, idade, cpf, departamento) {
        super(nome, idade, cpf); // Chama o construtor da classe Pessoa
        this.departamento = departamento;
    }

    trabalharNoEscritorio() {
        console.log(`${this.nome} está trabalhando no departamento de ${this.departamento}.`);
    }

    // Opcional: Sobrescrever o método apresentar para incluir o departamento
    apresentar() {
        return `${super.apresentar()} Trabalho no departamento de ${this.departamento}.`;
    }
}

// --- Exemplo de Uso ---
console.log("--- Exemplo: Pessoas ---");

const estudanteJoao = new Estudante("João Silva", 20, "111.222.333-44", "2023001");
const professoraAna = new Professor("Ana Costa", 45, "555.666.777-88", "Matemática");
const funcionarioCarlos = new FuncionarioAdministrativo("Carlos Mendes", 35, "999.000.111-22", "Recursos Humanos");

console.log(estudanteJoao.apresentar()); // Olá, meu nome é João Silva, tenho 20 anos e meu CPF é 111.222.333-44. Sou estudante com matrícula 2023001.
estudanteJoao.estudar(); // João Silva (Matrícula: 2023001) está estudando muito!

console.log(professoraAna.apresentar()); // Olá, meu nome é Ana Costa, tenho 45 anos e meu CPF é 555.666.777-88. Sou professor(a) de Matemática.
professoraAna.ensinar(); // Ana Costa está ensinando a disciplina de Matemática.

console.log(funcionarioCarlos.apresentar()); // Olá, meu nome é Carlos Mendes, tenho 35 anos e meu CPF é 999.000.111-22. Trabalho no departamento de Recursos Humanos.
funcionarioCarlos.trabalharNoEscritorio(); // Carlos Mendes está trabalhando no departamento de Recursos Humanos
