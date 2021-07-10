const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicar =(num1, num2) =>{
    return parseInt (num1) * parseInt(num2);
}

const dividir =(num1 , num2) =>{
    return parseInt (num1) / parseInt (num2);
}

let operacion = prompt( " que operacion deseas       1.- Suma ,    2.- Resta    3.- Multiplacion     4.- Division");

if(operacion == 1){
    let numero1 = prompt("Ingresa el primer numero ");
    let numero2 = prompt ("Ingresa el segundo numero ");
    let resultado = sumar(numero1 ,numero2);
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 2){
    let numero1 = prompt("Ingresa el primer numero ");
    let numero2 = prompt ("Ingresa el segundo numero ");
    let resultado = restar(numero1 ,numero2);
    alert(`tu resultado es ${resultado}`)
}

else if (operacion == 3){
    let numero1 = prompt("Ingresa el primer numero ");
    let numero2 = prompt ("Ingresa el segundo numero ");
    let resultado = multiplicar(numero1 ,numero2);
    alert(`tu resultado es ${resultado}`)
}

else if (operacion ==4){
    let numero1 = prompt("Ingresa el primer numero ");
    let numero2 = prompt ("Ingresa el segundo numero ");
    let resultado = dividir(numero1 ,numero2);
    if(numero2 == 0){
        alert("No se puede dividir entre 0")
    }
    else{
        alert(`tu resultado es ${resultado}`)
    }
    

}

else{
    alert("opcion no valida")
}