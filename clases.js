class Vehiculo {

    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad= antiguedad;

    }

    aumentarVelocidad(){
        this.velocidad +=1;

    }

    disminuirVelocidad(){
        this.velocidad -=1

    }
   
}


class Autobus extends Vehiculo{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad) // para confirmar los atributos que hereda
        this.altura = 5;
    }

    mostrarAltura(){
        return "la altura del autobus es de " + this.altura;
    }

}

var autobus1 = new Autobus('Pegasus', 200, 2018)

var vehiculo1 = new Vehiculo("Audi",20,2017);
console.log(vehiculo1);
//vehiculo1.modelo
vehiculo1.aumentarVelocidad();
vehiculo1.aumentarVelocidad();
vehiculo1.aumentarVelocidad();
console.log(vehiculo1.velocidad);
console.log(autobus1.mostrarAltura());




