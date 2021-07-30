 
 
 const obtenerInformacion =(materia) =>{
     //logica el primer elemento de la clase es el profesor 
    materias = {
        introCarrera:["Irma García","Rodrigo","Juancho", "Erick", "Cofla", "Saul"],
        fundamentosProgamacion:["Irma García","Cofla", "Maria", "Juan", "Juancho"],
        matematicasComputcionales:["Lourdes Quesada","Rodrigo","Maria", "Juan", "Erick"],
        Matematicas1:["Iliana Carrillo","Roberto", "Dante", "Rigo", "Cofla", "Miriam", "Cristina", "Jorge"],
        Fisica1:["Pablo Paniagua","Cofla","Roberto", "Dante", "Rigo","Maria", "Juan", "Juancho","Erick", "Saul" ],
        Administracion:["Pedro Carreon","Cofla","Roberto", "Dante", "Rigo","Maria", "Juan", "Juancho","Erick", "Saul","Monica", "Sandra" ]

    }
    if (materias[materia]!== undefined){
        return [materias[materia], materia];
    }
    else{
        return false;
    }

}




let informacion=obtenerInformacion("Fisica1")

if(informacion!==false){
    let profesor = obtenerInformacion ("Fisica1")[0][0]
    let alumno = obtenerInformacion("Fisica1")[0]
    alumno.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b></br>
    Los alumnos son: <b style="color:blue">${alumno}</b> <br> <br>` )
    
}

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


