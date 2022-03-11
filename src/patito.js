class Animal {
    constructor(peso, vivo, ruidoRespiracion) {
        this.peso = peso;
        this.vivo = vivo;
        this.ruidoRespiracion = ruidoRespiracion;
    }

    respirar() {
        if (this.vivo === true) {
            console.log(this.ruidoRespiracion);
        } else {
            console.log("...");
        }
    }
}

class Perro extends Animal {
    constructor(raza, peso, vivo, ruidoRespiracion) {
        super(peso, vivo, ruidoRespiracion);
        this.raza = raza;
    }
}

class Mascota extends Perro {
    constructor(nombre, owner, raza, peso, vivo, ruidoRespiracion) {
        super(raza, peso, vivo, ruidoRespiracion);
        this.nombre = nombre;
        this.owner = owner;
    }
}

const bruto = new Mascota("Bruto", "Tomás", "Husky Siberiano", 30, "Shhhhh");

console.log(bruto);
