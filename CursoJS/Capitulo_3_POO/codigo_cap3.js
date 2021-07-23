// se crea la clase con los atributos que van a representar la clase de animales especie, edad y color. esos se declarar a la hora de declarar la clase
//con los (this) se accede a los atributos de la clase para poder inicializarlas
// 

class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    //no se pueden hacer funcines fleha dentro de las clases
    verInfo (){
        document.write(this.info + "<br>")

    }
}

//instanciar clase
// ya creada la clase se hacen objetos que van a tener los atributos de la clase gato perro, etc y se declaran como new(clase) 

let perro = new animal ("canino", 1, "café");
let gato = new animal ("felino", 2, "negro")
let pajaro = new animal ("ave", 1, "verde")

/*
document.write ( perro.info + "<br>")
document.write ( gato.info  + "<br>")
document.write ( pajaro.info + "<br>")
*/

perro.verInfo();
gato.verInfo();
pajaro.verInfo();


