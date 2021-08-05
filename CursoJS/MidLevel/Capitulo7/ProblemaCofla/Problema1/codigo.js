let alto = window.screen.height;
let ancho = window.screen.width;


//comprar = confirm(`el alto es ${alto}, el ancho es ${ancho}`)


/*
if(comprar){
    alert("compra realizada exitosamente")
}
else{
    alert("compra cancelada")
}
*/

if(alto >= 720 && ancho>= 1280){
    confirm("deseas comprar la computadora")
    alert(`compra realizada exitosa el alto de la pantalla es ${alto} y el ancho es de ${ancho}` )
    
}
else{
    alert("compra cancelada")
}