//
const sendButton =document.getElementById('snd-nota')
sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    //mensaje="hola"
    try{
        prevRes=parseInt(document.getElementById('nota').value);
        if(isNaN(prevRes)){
            throw "Eres gracioso"

        }
        mensaje=definirMensaje(prevRes);
        resultado = verificarAprobacion(8,5,prevRes);
    }
    catch(e){
        resultado = ("eres gracioso?")
        mensaje = "No hackees el sitio"
    }
    abrirModal(resultado,mensaje);
})

const definirMensaje=(pr) =>{
    switch(pr){
        case 1: resultado = "date de baja, sacaste 1";
        break;
        case 2: resultado = "Eres malo, sacaste 2";
        break;
        case 3: resultado = "No sabes casi nada, sacaste 3";
        break;
        case 4: resultado = "muy mal, sacaste 4";
        break;
        case 5: resultado = "Mal, sacaste 5";
        break;
        case 6: resultado = "Mal, pero casi lo logras, sacaste 6";
        break;
        case 7: resultado = "bien, pero puedes mejorar, sacaste 7";
        break;
        case 8: resultado = "Bien, sacaste 8";
        break;
        case 9: resultado = "Muy Bien, sacaste 9";
        break;
        case 10: resultado = "Eres un crack, sacaste 10";
        break;
        default: resultado=null;
    }
    return resultado;
}
const verificarAprobacion =(nota1, nota2, prevRes)=>{
    promedio = (nota1 + nota2 +prevRes)/3

    if(promedio >=7){
        return ["<span class='green'>APROBADO</span>","Tu promedio fue de : " + Math.round(promedio)]

    }
    return ["<span class='red'>DESAPROBADO</span>","Tu promedio fue de: " + Math.round(promedio)]

}

const abrirModal =(res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML =  msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display ="flex";
    modal.style.animation = "aparecer 1s forwards";
}

