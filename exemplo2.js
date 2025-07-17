class Produto {
    constructor(nome, preco, codigo) {
        this.nome = nome;
        this.preco = preco;
        this.codigo = codigo;
    }

    exibirDetalhes() {
        return `Produto: ${this.nome} (Código: ${this.codigo}) - Preço: R$${this.preco.toFixed(2)}`;
    }
}

class Eletronico extends Produto {
    constructor(nome, preco, codigo, garantiaMeses) {
        super(nome, preco, codigo); // Chama o construtor da classe Produto
        this.garantiaMeses = garantiaMeses;
    }

    ligar() {
        console.log(`O eletrônico ${this.nome} está sendo ligado.`);
    }

    // Sobrescrever para incluir detalhes da garantia
    exibirDetalhes() {
        return `${super.exibirDetalhes()} - Garantia: ${this.garantiaMeses} meses.`;
    }
}

class Roupa extends Produto {
    constructor(nome, preco, codigo, tamanho, cor) {
        super(nome, preco, codigo); // Chama o construtor da classe Produto
        this.tamanho = tamanho;
        this.cor = cor;
    }

    vestir() {
        console.log(`Você está vestindo a roupa ${this.nome} (Tamanho: ${this.tamanho}, Cor: ${this.cor}).`);
    }

    // Sobrescrever para incluir detalhes de tamanho e cor
    exibirDetalhes() {
        return `${super.exibirDetalhes()} - Tamanho: ${this.tamanho}, Cor: ${this.cor}.`;
    }
}

class Alimento extends Produto {
    constructor(nome, preco, codigo, dataValidade) {
        super(nome, preco, codigo); // Chama o construtor da classe Produto
        this.dataValidade = dataValidade; // Formato: "DD/MM/AAAA"
    }

    consumir() {
        console.log(`Você consumiu o alimento ${this.nome}. Validade: ${this.dataValidade}.`);
    }

    // Sobrescrever para incluir a data de validade
    exibirDetalhes() {
        return `${super.exibirDetalhes()} - Validade: ${this.dataValidade}.`;
    }
}

// --- Exemplo de Uso ---
console.log("\n--- Exemplo: Produtos em uma Loja ---");

const smartphone = new Eletronico("Smartphone X", 2500.00, "EL001", 12);
const camiseta = new Roupa("Camiseta Algodão", 49.90, "RO005", "M", "Azul");
const iogurte = new Alimento("Iogurte Natural", 4.50, "AL010", "20/07/2025"); // Data futura

console.log(smartphone.exibirDetalhes()); // Produto: Smartphone X (Código: EL001) - Preço: R$2500.00 - Garantia: 12 meses.
smartphone.ligar(); // O eletrônico Smartphone X está sendo ligado.

console.log(camiseta.exibirDetalhes()); // Produto: Camiseta Algodão (Código: RO005) - Preço: R$49.90 - Tamanho: M, Cor: Azul.
camiseta.vestir(); // Você está vestindo a roupa Camiseta Algodão (Tamanho: M, Cor: Azul).

console.log(iogurte.exibirDetalhes()); // Produto: Iogurte Natural (Código: AL010) - Preço: R$4.50 - Validade: 20/07/2025.
iogurte.consumir(); // Você consumiu o alimento Iogurte Natural. Validade: 20/07/2025.
