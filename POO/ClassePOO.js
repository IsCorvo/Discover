// Definir classe
class Pessoa {
    constructor(nome) {
        this.id = ~~(Math.random() * 100000)
        this.nome = nome
    }

    dizerNome() {
        console.log(this.nome)
    }
    
}

// Criar objeto
const pessoa = new Pessoa('Mayk')