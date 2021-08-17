const materiasHTML = document.querySelector(".materias");
const materias = [{
    nombre: "Compiladores",
    nota: 7,
},
{
    nombre: "Sistemas Inteligentes",
    nota: 8,
},
{
    nombre: "Ciencia de Datos",
    nota: 9,
},
{
    nombre: "Programacion avanzada",
    nota: 8,
},
{
    nombre: "Bases de datos avanzadas",
    nota: 7,
},
{
    nombre: "Arquitectura de Software",
    nota: 8,
},
{
    nombre: "Intro a la vida profesional",
    nota: 9,
},
]

const obtenerMateria = (id)=>{
    return new Promise((resolve, reject)=>{
        materia = materias[id];
        if (materia == undefined)reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*1000)
    })
}
// //let materiaid  = 1
// obtenerMateria(1).then(res => console.log(res))
const devolverMaterias = async()=>{
    let materia = [];
    for(let i = 0; i < materias.length; i++){
        materia [i] = await obtenerMateria(i);
        //console.log(materia[i])
        let newHTMLCODE = `
        <div class="materia">
            <div class="nombre"> ${materia[i].nombre} </div>
            <div class="nota"> ${materia[i].nota}</div>
        </div>
        `
        materiasHTML.innerHTML += newHTMLCODE
    }

}

devolverMaterias()