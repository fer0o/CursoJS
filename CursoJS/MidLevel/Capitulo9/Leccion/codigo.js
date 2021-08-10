const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");


contenedor.addEventListener("click", (e)=>{
    alert("di click en el target")
    console.log("contenedor");
})
button.addEventListener("click", (e)=>{
    alert("di click en el boton")
    console.log("boton")

});


