/**
 * codigo de ejemplo de arrays
 * let frutas =["banana", "manzanas", "pera", "mango"];
document.write(frutas[0])
 */

let pc ={
    nombrePc: "fer0oPC",
    procesador: "intel i7",
    ram: "16gb",
    espacio: "500GB"
};
let nombrePC = pc["nombrePc"];
let procesador =pc["procesador"];
let ram = pc["ram"];
let discoDuro = pc["espacio"];

frase = `el nombre de mi PS es <b>${nombrePC}</b>  <br>
el procesador es <b>${procesador}</b> <br> 
la memoria ram  es de  <b>${ram}</b> <br>
mientras que la capacidad de disco es de <b>${discoDuro}</b>`
;


document.write(frase);


