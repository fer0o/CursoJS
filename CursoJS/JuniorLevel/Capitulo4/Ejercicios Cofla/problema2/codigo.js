 
 
 const obtenerInformacion =(materia) =>{
     //logica el primer elemento de la clase es el profesor 
    materias = {
        //lo mas parecido a un array asociativo
        introCarrera:["Irma García","Rodrigo","Juancho", "Erick", "Cofla", "Saul"],
        fundamentosProgamacion:["Irma García","Cofla", "Maria", "Juan", "Juancho"],
        matematicasComputcionales:["Lourdes Quesada","Rodrigo","Maria", "Juan", "Erick"],
        Matematicas1:["Iliana Carrillo","Roberto", "Dante", "Rigo", "Miriam", "Cristina", "Jorge"],
        Fisica1:["Pablo Paniagua","Cofla","Roberto", "Dante", "Rigo","Maria", "Juan", "Juancho","Erick", "Saul" ],
        Administracion:["Pedro Carreon","Cofla","Roberto", "Dante", "Rigo","Maria", "Juan", "Juancho","Erick", "Saul","Monica", "Sandra" ]

    }
    if (materias[materia]!== undefined){
        return [materias[materia], materia, materias];
    }
    else{
        return materias;
    }

}


const mostrarInformacion=(materia) =>{
let informacion=obtenerInformacion(materia)
if(informacion!==false){
    let profesor = informacion[0][0]
    let alumno = informacion[0]
    alumno.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b></br>
    Los alumnos son: <b style="color:blue"> ${alumno}</b> <br> <br>` )
    
}
}

//funcion contar clases cofla
const cantidadClases=(alumno)=>{
    let informacion = obtenerInformacion()
    let clasesPresentes = []
    let cantidadTotal = 0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal ++;
            clasesPresentes.push( " " + info)
        }
    }
    return `<b style="color:blue">${alumno}</b> esta en <b> ${cantidadTotal} clases: </b> <b style="color:green">${clasesPresentes}</b><br><br>
    `

}

mostrarInformacion("Fisica1")
mostrarInformacion("Matematicas1")
mostrarInformacion("introCarrera")
mostrarInformacion("fundamentosProgamacion")
mostrarInformacion("matematicasComputcionales")
mostrarInformacion("Administracion")

document.write(cantidadClases("Cofla"))
document. write(cantidadClases("Juancho"))
document.write(cantidadClases("Pamela"))
//document.write(informacion)







/*intento clase profesores*/
/*
class Profesores{
    constructor(nombre, apellido,){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    infoProfesores(){
        return `<b>Nombre Profesor: </b>  ${this.nombre} ${this.apellido}`
    }
    
}


class Materia{
    constructor(clave, materia){
        this.clave = clave;
        this.materia = materia;
    }
    infoMateria(){
        return`<b> Clave Materia: </b> ${this.clave} <b>Nombre materia</b> ${this.materia}`
    }
}

class Alumno{
    constructor(matricula, nombre, apellido){
        this.matricula = matricula;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    infoAlumno(){
        return`<b>Matricula Alumno: </b> ${this.matricula} <b>Nombre Alumno: </b>  ${this.nombre} ${this.apellido}`
    }
}


class Clase extends Materia{
    constructor(clave, materia, profesor, alumno){
        super(clave, materia)
        this.profesor = profesor
        this.alumno = alumno 
    }

}
//Datos profesores//
/*
profesorFisica1 = new Profesores("Juan", "Lopez");
profesorIntroCarrera = new Profesores("Irma", "Penelope");
profesorFundamentosProgamacion = new Profesores("Ariel", "Ortiz");
profesorMatematicasComputcionales = new Profesores("Lourdes", "Batalla");
//document.write(profesorFisica1.infoProfesores())


//Datos Materia//
materiaFisica1 = new Materia("L091283","Fisica 1");
materiaIntroCarrera = new Materia("AL02663", "Intoduccion a la Carrera");
materiaFundamentosProgamacion = new Materia("C67863", "Fundamentos de la programacion");
materiaMatematicasComputcionales = new Materia("R55433", "Matematicas Computacionales");

/*
document.write(`
${materiaFisica1.infoMateria()}<br> <br>
${materiaIntroCarrera.infoMateria()}<br> <br>
${materiaFundamentosProgamacion.infoMateria()}<br> <br>
${materiaMatematicasComputcionales.infoMateria()}<br> <br>
`)
*/
/*
Alumno1 = new Alumno ("A0178127", "Juancho", "Lopez");
Alumno2 = new Alumno ("A8907987", "Maria","Godoy");
Alumno3 = new Alumno ("A1387678", "Cofla","Godinez");
Alumno4 = new Alumno ("A78783", "Rigo", "Auyento");
document.write(Alumno2.infoAlumno())
*/


