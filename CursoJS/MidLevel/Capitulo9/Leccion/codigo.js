/*
const inputUser = document.querySelector(".input-user");
const contenedorUser=document.querySelector(".seleecionado-user")
const input = document.querySelector(".input-prueba")
const contenedor = document.querySelector(".seleccionado")

inputUser.addEventListener("select",(e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoComplet = inputUser.value;
    contenedor.textContent = console.log(textoComplet.substring(start,end));
})

input.addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoComplet = input.value;
    contenedor.textContent = console.log(textoComplet.substring(start,end));
})
*/

const inputUser = document.querySelector(".input-user");
const contenedorUser=document.querySelector(".seleecionado-user")
const input = document.querySelector(".input-prueba")
const contenedor = document.querySelector(".seleccionado")

inputUser.addEventListener("select",(e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoComplet = inputUser.value;
    contenedor.textContent = console.log(textoComplet.substring(start,end));
})

input.addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoComplet = input.value;
    contenedor.textContent = console.log(textoComplet.substring(start,end));
})


