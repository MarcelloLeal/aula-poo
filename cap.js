class ContaBancaria {    
    #saldo;
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial; // Inicializa a propriedade privada
        console.log(`Conta de ${this.titular} criada com saldo inicial de R$${this.#saldo.toFixed(2)}.`);
    }

    // Método público para depositar dinheiro
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor; // Acesso interno permitido
            console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.#saldo.toFixed(2)}`);
            return true;
        }
        console.log("Valor de depósito inválido.");
        return false;
    }

    // Método público para sacar dinheiro
    // Este método é a "porta" para alterar o saldo.
    sacar(valor) {
        if (valor > 0 && this.#saldo >= valor) {
            this.#saldo -= valor; // Acesso interno permitido
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.#saldo.toFixed(2)}`);
            return true;
        }
        console.log("Saldo insuficiente ou valor de saque inválido.");
        return false;
    }

    // Método público para obter o saldo (somente leitura controlada)
    getSaldo() {
        return this.#saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(titular, saldoInicial, limiteChequeEspecial) {
        super(titular, saldoInicial);
        this.limiteChequeEspecial = limiteChequeEspecial;
        console.log(`  Tipo: Conta Corrente com limite de cheque especial de R$${this.limiteChequeEspecial.toFixed(2)}.`);
    }

    // Sobrescreve o método sacar para incluir cheque especial
    sacar(valor) {
        // Agora, para pegar o saldo, usamos o método público 'getSaldo()' da classe pai.
        const saldoDisponivelTotal = this.getSaldo() + this.limiteChequeEspecial;

        if (valor > 0 && saldoDisponivelTotal >= valor) {
            // Se o saque for possível dentro do limite total,
            // chamamos o método 'sacar' da superclasse para realmente diminuir o #saldo.
            // O 'super.sacar(valor)' cuidará de atualizar a propriedade privada '#saldo'.
            if (valor > this.getSaldo()) { // Se o saque está usando o cheque especial
                console.log(`Saque de R$${valor.toFixed(2)} usando cheque especial.`);
            }
            return super.sacar(valor); // Delega a operação de saque real à classe pai
        }
        console.log("Valor de saque excede o limite disponível (saldo + cheque especial).");
        return false;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(titular, saldoInicial) {
        super(titular, saldoInicial);
        console.log(`  Tipo: Conta Poupança.`);
    }

    renderJuros(taxa) { // Taxa em percentual (ex: 0.01 para 1%)
        if (taxa > 0) {
            // Para calcular os juros, pegamos o saldo usando 'getSaldo()'.
            const juros = this.getSaldo() * taxa;
            // Para aplicar os juros, usamos o método público 'depositar()'.
            // Isso garante que a propriedade privada #saldo seja atualizada corretamente pela classe pai.
            this.depositar(juros);
            console.log(`Juros de R$${juros.toFixed(2)} (${(taxa * 100).toFixed(2)}%) rendidos na poupança de ${this.titular}.`);
            return true;
        }
        console.log("Taxa de juros inválida.");
        return false;
    }
}

console.log("--- Testando Contas com Encapsulamento ---");

const cc = new ContaCorrente("Maria", 100, 200); // Saldo inicial: 100, Limite: 200
cc.sacar(150); // Deve usar 50 do cheque especial.
// Tentando acessar diretamente o saldo (NÃO FUNCIONA):
// console.log(`Saldo CC (acesso direto falho): ${cc.saldo}`); // Isso dará 'undefined' ou erro se 'saldo' não existisse.
console.log(`Saldo CC (via getSaldo): R$${cc.getSaldo().toFixed(2)}`); // -50.00

console.log("\n-------------------------------------");

const cp = new ContaPoupanca("Pedro", 500);
cp.depositar(100); // Deposita 100
cp.renderJuros(0.02); // Rende 2% sobre o saldo de 600 (12 reais)
console.log(`Saldo CP (via getSaldo): R$${cp.getSaldo().toFixed(2)}`); // 612.00