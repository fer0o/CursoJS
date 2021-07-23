/**
 * Usamos una base similar del cap 3
 */
class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        //este no es parametro pero es para llamar todo por funcion
        this.info = `Soy ${this.especie}, tengo ${this.edad} en años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
}
class Perro extends Animal{
    constructor(especie,edad, color, raza){
        super(especie, edad, color)
        this.raza = null;
    }
    /*
    ladrar(){
        alert(`soy un ${this.especie} soy de la raza ${this.raza} y hago wooof!!`)

    }
    */
   //metodo set para cambiar el nombre de la raza
   set setRaza(nuevoNombre){
       this.raza = nuevoNombre

   }
   get getRaza(){
       return this.raza
   }
    
}

class Felinos extends Animal {
    constructor ( especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    set setRaza(nuevoNombre){
        this.raza = nuevoNombre
    }
    get getRaza(){
        return this.raza
    }
}


class Aves extends Animal{
    constructor(especie, edad, color, habitat){
        super(especie, edad, color);
        this.habitat = habitat;

    }
    set setHabitat (nuevoNombre){
        this.habitat = nuevoNombre
    }
    get getHabitat(){
        return this.habitat
    }
}

//los Objetos se definen con const 

//let dogo = new Perro ("perro", 5 , "café", "doberman")
//datos de class animal
const dogo = new Perro ("perro", 5, "cafe")
const gato = new Felinos("gato", 2, "negro")
const pajaro = new Aves ("pajaro", 3, "verde")

// no se puede tener on objeto con el mismo nombre que la clase
//creacion de las razas
dogo.setRaza = "Perro salchicha"
gato.setRaza = "Gato egipcio"
pajaro.setHabitat = "Selva humeda"

document.write(`soy un ${dogo.especie} y tengo ${dogo.edad} en años mi color es ${dogo.color} y mi raza es ${dogo.getRaza}` +"<br>")
//gato.verInfo()
document.write(`Soy un ${gato.especie} y tengo ${gato.edad} en años y mi color de pelaje es ${gato.color} y mi raza es ${gato.getRaza}` + "<br>")
//pajaro.verInfo()
document.write(`Soy un ${pajaro.especie} y duro alrrededor de ${pajaro.edad} años, mi plumaje es de color ${pajaro.color} y mi habitat natural es ${pajaro.getHabitat}` +"<br>")

