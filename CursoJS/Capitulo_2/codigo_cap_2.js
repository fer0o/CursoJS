/**
 * codigo de ejemplo de arrays
 * let frutas =["banana", "manzanas", "pera", "mango"];
document.write(frutas[0])
 */


/**
 * codigo para ejemplo arrays asociativos
 * let pc ={
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





/**
 * codigo ejemplo bucle while
 * imprime numeros desde 0 al 10 preguntando en cada vuelta si el numero que tiene es mayor a 10, si no se le incrementa un numero y vuelve a preguntar.
 * 
 * let numeroParaSumar =0;

while(numeroParaSumar <10){
    numeroParaSumar++;  
    document.write(numeroParaSumar + "<br>");
}
 
 * 
let numero =0;

while(numero < 1000){
    numero++;
    document.write(numero);
    if(numero ==10){
        break;
    }
}
document.write("fin")

//ya con el break
 */


/** 
 * codigo ejemplo for 
 * let i = 20; //este let i es una variable declarada e inicializada con el valor de 20, este valor no es parte del bucle del for
 * //en el ciclo for se declara el la variable i con un valor de 0, esta no es igual a la anterior, esta solo se ve afectada por el bucle
 *
for( let i =0; i <= 10; i++){
    document.write(i + "<br>")
}
document.write(i);
//final de codigo se muestran los numeros del 0 al 10 y aparte el valor de i fuera del bucle con el valor de 20
for (i = 20; i>=0; i--){
    document.write(i + "<br>");
    if(i ==12){
        break;
        
    }
    
}

document.write("ya parale loco" +"<br>")
*/



/**
 * codigo ejemplo for in/on
 * 
 * //for in nos sirve para mostrar el índice de los objetos de un array
let animales =["michi", "milanezo", "t-rex", "un ratoncio"];

for(animal in animales){
    document.write(animales[animal] +"<br>")
}

document.write("<br>");


//for of nos muestra el valor del array
for(animal of animales){
    document.write(animal +"<br>")

}
 
 */
/*
//arrays y ciclos for para recorrer ciclos


array1 = ["maria", "josefa", "roberta"];
array2=["pedro", "marcelo", array1,"martha"];

forRancio:
for(let array in array2){
    if(array ==2){
        for(let array of array1){
            document.write(array +"<br>")
            break forRancio;
        }
    }
    else{
        document.write(array2[array] + "<br>")
    }
}
*/