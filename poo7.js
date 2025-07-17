class DispositivoEletronico {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.marca} ${this.modelo} foi ligado.`);
        } else {
            console.log(`${this.marca} ${this.modelo} já está ligado.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.marca} ${this.modelo} foi desligado.`);
        } else {
            console.log(`${this.marca} ${this.modelo} já está desligado.`);
        }
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(marca, modelo, sistemaOperacional) {
        super(marca, modelo);
        this.sistemaOperacional = sistemaOperacional;
        super.ligar(); // Opcional: Ligar ao ser inicializado
    }

    fazerChamada(numero) {
        if (this.ligado) {
            console.log(`${this.marca} ${this.modelo} ligando para ${numero}...`);
        } else {
            console.log(`${this.marca} ${this.modelo} está desligado. Não pode fazer chamadas.`);
        }
    }
}

class Notebook extends DispositivoEletronico {
    constructor(marca, modelo, memoriaRAM) {
        super(marca, modelo);
        this.memoriaRAM = memoriaRAM;
        super.ligar(); // Opcional: Ligar ao ser inicializado
    }

    instalarPrograma(nomePrograma) {
        if (this.ligado) {
            console.log(`Instalando "${nomePrograma}" no ${this.marca} ${this.modelo}...`);
        } else {
            console.log(`${this.marca} ${this.modelo} está desligado. Não pode instalar programas.`);
        }
    }
}

// Exemplo de uso
const meuCelular = new Smartphone("Samsung", "Galaxy S23", "Android");
const meuPc = new Notebook("Dell", "XPS 15", 16);

meuCelular.fazerChamada("123-4567");
meuPc.instalarPrograma("VS Code");
meuPc.desligar();
meuPc.instalarPrograma("Word"); // Deve falhar