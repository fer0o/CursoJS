const contenedor = document.querySelector(".flex-container")
let contador  = 0;
//devolver un arreglo pra lo que necesitamos
function crearLlave(nombre, modelo, precio){
    contador++;
    img = "<img class='llave-img'src ='llave.png'>"
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;

    return[img,nombre,modelo,precio]

}

/*
const llave = crearLlave("Llave 1", "modelo X","33")

//document.write(llave[0],llave[1],llave[2])

contenedor.innerHTML=llave[0] +llave[1]+llave[2]
*/
const changeHidden=(number)=>{
    document.querySelector(".key-data").value=number
}
let documentFragment = document.createDocumentFragment()


for( i =0; i<20;i++){
    let modeloRandom = Math.round(Math.random()*100000);
    let precioRandom= Math.round(Math.random()*10+30)
    let llave = crearLlave(`llave:  #${i}`,`modelo:  #${modeloRandom}`, precioRandom)
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)})
    div.tabIndex=i;
    div.classList.add(`item-${i}`,'flex-item')
    div.innerHTML=llave[0] +llave[1]+ llave[2]+llave[3]
    documentFragment.appendChild(div)
    
}
contenedor.appendChild(documentFragment)