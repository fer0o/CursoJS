 
 /*
 const obtenerInformacion =(materia) =>{
    materias = {
        introCarrera:["Rodrigo","Juancho", "Erick", "Cofla", "Saul"],
        fundamentosProgamacion:["Cofla", "Maria", "Juan", "Juancho"],
        matematicasComputcionales:["Rodrigo","Maria", "Juan", "Erick"],
        Matematicas1:["Roberto", "Dante", "Rigo", "Cofla", "Miriam", "Cristina", "Jorge"],
        Fisica1:["Cofla","Roberto", "Dante", "Rigo","Maria", "Juan", "Juancho","Erick", "Saul" ],
        Administracion:["Cofla","Roberto", "Dante", "Rigo","Maria", "Juan", "Juancho","Erick", "Saul","Monica", "Sandra" ]

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
    document.write(`Alumnos presentes en <b> ${informacion [1]} :</b> <b style="color:red">${informacion [0]}</br></b> `)
    
}

//document.write(informacion)

*/
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
*/

class Materia{
    constructor(clave, materia){
        this.clave = clave;
        this.materia = materia;
    }
    infoMateria(){
        return`<b> Clave Materia: </b> ${this.clave} <b>Nombre materia</b> ${this.materia}`
    }
}
/*
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

*/
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

*/
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

