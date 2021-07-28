

 /////////////////Mejora de código///////////////////////////
 class Calculadora {
   sumar (num1, num2){
     return parseInt(num1) + parseInt(num2);
   };

   restar  (num1, num2)  {
     return parseInt(num1) - parseInt(num2);
   };

   multiplicar  (num1, num2) {
     return parseInt(num1) * parseInt(num2);
   };

   dividir  (num1, num2) {
     return parseInt(num1) / parseInt(num2);
   };

   potencia (num1, exp){
       return parseInt(num1) ** parseInt(exp)
   }

   raizCuadrada(num1){
       return parseInt(Math.sqrt(num1)); 
   }
   raizCubica(num1){
       return parseInt(Math.cbrt(num1));
   }
 }

 const calculadora = new Calculadora();


let operacion = prompt( " que operacion deseas\n 1.- Suma\n 2.- Resta\n 3.- Multiplacion\n 4.- Division\n 5.- Potencia\n 6.- Raiz cuadrada\n 7.- Raiz cubica"  );

if(operacion == 1){
    let numero1 = prompt("Ingresa el primer numero ");
    let numero2 = prompt ("Ingresa el segundo numero ");
    let resultado = calculadora.sumar(numero1 ,numero2);
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 2){
    let numero1 = prompt("Ingresa el primer numero ");
    let numero2 = prompt ("Ingresa el segundo numero ");
    let resultado = calculadora.restar(numero1 ,numero2);
    alert(`tu resultado es ${resultado}`)
}

else if (operacion == 3){
    let numero1 = prompt("Ingresa el primer numero ");
    let numero2 = prompt ("Ingresa el segundo numero ");
    let resultado = calculadora.multiplicar(numero1 ,numero2);
    alert(`tu resultado es ${resultado}`)
}

else if (operacion ==4){
    let numero1 = prompt("Ingresa el primer numero ");
    let numero2 = prompt ("Ingresa el segundo numero ");
    let resultado =calculadora.dividir(numero1 ,numero2);
    if(numero2 == 0){
        alert("No se puede dividir entre 0")
    }
    else{
        alert(`tu resultado es ${resultado}`)
    }

}
else if(operacion == 5 ){
    let numero1 = prompt("Ingresa el primer numero");
    let exp = prompt("Ingresa el numero a elevar el numero")
    let resultado = calculadora.potencia(numero1,exp);
    alert(`tu resultado es ${resultado}`)
}
else if(operacion == 6 ){
    let numero1 = prompt("ingresa el numero para raíz cuadrada");
    let resultado = calculadora.raizCuadrada(numero1);
    alert(`la raiz cuadrada de tu numero es ${resultado}`);
}
else if(operacion == 7 ){
    let numero1 = prompt("ingrese el numero para la raiz cubica");
    let resultado = calculadora.raizCubica(numero1);
    alert(`la raiz cubica de tu numero es ${resultado}`)
}

else{
    alert("opcion no valida")
}