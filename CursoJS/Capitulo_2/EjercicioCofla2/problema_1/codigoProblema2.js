let entrada_gratis = false;

const verificarCliente = (time)=>{
    let edad=prompt(" decime tu edad");
    if(edad >= 18){
        if( time >=2 && time < 7 && entrada_gratis == false){
            alert("podes pasar  gratis por que eres la primer persona despues de las 2 AM");
            entrada_gratis = true;
        }
        else{
            alert(`son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`)
        }
    }
    else{
        alert("sos menor de edad, andate a la mierdaa")
    }

}
verificarCliente(23);
verificarCliente(24);
verificarCliente(2);
verificarCliente(17);
verificarCliente(2);
verificarCliente(3);
verificarCliente(4);
verificarCliente(9);
verificarCliente(8);
verificarCliente(9);


