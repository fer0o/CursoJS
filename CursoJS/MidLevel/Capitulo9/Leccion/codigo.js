const input = document.querySelector(".input-prueba")
const contenedor = document.querySelector(".seleccionado")

input.addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoComplet = input.value;
    contenedor.textContent = console.log(textoComplet.substring(start,end));
})