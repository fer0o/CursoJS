let alumnos = [{
    nombre: "Fernando Medellin",
    mail: "fer0osennin@gmail.com",
    materia:"Matematicas  2"
},{
    nombre: "Ruben Cuevas",
    mail: "chubas@gmail.com",
    materia:"Programación avanzada"
},{
    nombre: "Pamela Beltrán",
    mail: "start1295@hotmail.com",
    materia:"Francés 1"
},{
    nombre: "Cofla",
    mail: "cofla@gmail.com",
    materia:"introduccion a la carrera"
},{
    nombre: "Ashia Lopez",
    mail: "ashia@gmail.com",
    materia:"Calculo 1"
},{
    nombre: "Albert Medellin",
    mail: "trole@gmail.com",
    materia:"Matematicas  2"
}]
const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");


for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let mail = datos["mail"];
    let materia = datos ["materia"];
    let htmlCode = `
        <div class="grid-item nombre"> ${nombre}  </div>
        <div class="grid-item mail"> ${mail} </div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1"> Semana 1</option>
                <option value="Semana 2"> Semana 2</option>
            </select>

        </div>`;
    document.querySelector(".grid-container").innerHTML+=htmlCode;

}

boton.addEventListener("click",()=>{
    let confirmar = confirm("Realmente quieres confirmar las mesas?");
    if(confirm){
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas=document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }

})