class ContaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado. Saldo atual: R$${this.saldo.toFixed(2)}`);
            return true;
        }
        console.log("Valor de depósito inválido.");
        return false;
    }

    sacar(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Saldo atual: R$${this.saldo.toFixed(2)}`);
            return true;
        }
        console.log("Saldo insuficiente ou valor de saque inválido.");
        return false;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(titular, saldoInicial, limiteChequeEspecial) {
        super(titular, saldoInicial);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valor) { // Sobrescreve para incluir cheque especial
        const saldoDisponivel = this.saldo + this.limiteChequeEspecial;
        if (valor > 0 && saldoDisponivel >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado (incluindo cheque especial se necessário). Saldo atual: R$${this.saldo.toFixed(2)}`);
            return true;
        }
        console.log("Valor de saque excede o limite disponível (saldo + cheque especial).");
        return false;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(titular, saldoInicial) {
        super(titular, saldoInicial);
    }

    renderJuros(taxa) { // Taxa em percentual (ex: 0.01 para 1%)
        if (taxa > 0) {
            const juros = this.saldo * taxa;
            this.saldo += juros;
            console.log(`Juros de R$${juros.toFixed(2)} rendidos. Novo saldo: R$${this.saldo.toFixed(2)}`);
            return true;
        }
        console.log("Taxa de juros inválida.");
        return false;
    }
}

// Exemplo de uso
const cc = new ContaCorrente("Maria", 100, 200);
cc.sacar(150); // Deve usar 50 do cheque especial
console.log(`Saldo CC: ${cc.saldo}`); // -50

const cp = new ContaPoupanca("Pedro", 500);
cp.depositar(100);
cp.renderJuros(0.02); // Rende 2%
console.log(`Saldo CP: ${cp.saldo}`); // 612