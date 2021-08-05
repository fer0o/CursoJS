//array con los datos necesarios [porcentaje de asistencia, promedio de la materia, completado de trabajos divididos en 4: 1=25%, 2=50%, 3=75%, 4=100% ]
const materias ={
    fisica: [90, 8, 2, " fisica "],
    matematicas:[30, 5, 1, " matematicas "],
    español:[80, 9, 4, " español "],
    calculo:[60, 6 ,2, " calculo "],
    intro_progra:[90, 9, 4, " intro_progra "],
    POO:[90, 8, 3, " Programacion Orientada a Objetos "],
    BD:[90, 7, 3, " Bases de Datos "]
}

const asistencia = ()=>{
    for (materia in materias){
        let asistencia = materias[materia][0];
        let promedio = materias [materia][1];
        let trabajos = materias[materia] [2]

        console.log(`${materias[materia][3]}`)
        if(asistencia >=90 ){
            console.log("%c     Cumple con el porcentaje de asistencias", "color:green")
        }
        else{
        console.log("%c     Reprobado Por inasistencias", "color:red")
        }

        if(promedio >= 7){
            console.log(" %c Cumple con el promedio", "color: green")
        }
        else{
            console.log(" %c    No cumple con el promedio ", "color: red")
        }
        if(trabajos >=3){
            console.log(" %c    Cumple con el porcentaje de trabajos", "color: green")
        }
        else{
            console.log( "%c    No Cumple con el porcentaje de trabajos","color: red")
        }
    }
}
asistencia()