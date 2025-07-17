class ContaBancaria{
    constructor (titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }
    depositar(valor){
        if (valor > 0){
            this.saldo += valor
            console.log(`Depósito de R$${valor.toFixed(2)} efetuado. Saldo atual: R$${this.saldo.toFixed(2)}`)
            return true
        }
        console.log("Valor inválido para depósito")
        return false
    }
    sacar(valor){
        if(valor > 0 && this.saldo >= valor){
            this.saldo -= valor
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Saldo atual: R$${this.saldo.toFixed(2)}`)
            return true
        }
        console.log("Saldo insuficiente.")
    }
    
}
class ContaCorrente extends ContaBancaria{
    constructor(titular, saldo, limiteChequeEspecial){
        super(titular, saldo)
        this.limiteChequeEspecial  = limiteChequeEspecial
    }
    sacar (valor){
        const saldoDisponivel = this.saldo + this.limiteChequeEspecial
        if (valor > 0 && saldoDisponivel >= valor){
            console.log(`Saldo inicial: R$${this.saldo.toFixed(2)}`)
            console.log(`Saque de R$${valor.toFixed(2)} realizado`) 
            console.log(`Saldo atual: ${this.saldo - saldoDisponivel}. Você está utilizando o Cheque Especial.`)                       
            return true
        }
        console.log("Valor de saque excede o limite disponível.")
        return false
    }   
}
const cc = new ContaCorrente ("Maria", 300, 500)
cc.sacar(800)




