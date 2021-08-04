function crearLlave(nombre, modelo, precio){
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;

    return[nombre,modelo,precio]

}
//devolver un arreglo pra lo que necesitamos

const llave = crearLlave("Llave 1", "modelo X","33")

document.write(llave[0],llave[1],llave[2])