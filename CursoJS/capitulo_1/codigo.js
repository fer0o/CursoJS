//Pedir el dinero a cada uno
let dineroCofla = prompt("Cuanto Dinero tienes Cofla? ");
let dineroRoberto = prompt("Cuanto Dinero tienes Roberto? ");
let dineroPedro = prompt("Cuanto Dinero tienes Pedro");

//parseint
dineroCofla = parseInt(dineroCofla);
dineroPedro = parseInt(dineroPedro);
dineroRoberto = parseInt(dineroRoberto);

//Soluciones con If y Else if mostrar el halado mas caro que pueden comprar
/*
Precio de los helados son los siguientes:

Palito de helado de agua: $0.6 USD
Palito de helado de crema: $1 USD
Bombón helado marca heladix: 1.6 USD
Bombón helado marca heladovich: $1.7 USD
Bombón helado marca helardo: $1.8 USD
Potecito de helado con confites: $2.9 USD
Pote de 1/4 de KG: $2.9 USD*/

//Solución Cofla
if(dineroCofla >= 0.6 && dineroCofla < 1 ){
    alert("Cofla te alcanza para el helado de agua");
    alert(" y te sobra" + (dineroCofla -0.6));
}
else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert(" Cofla Te alcanza para el palito de crema");
    alert(" y te sobra" + (dineroCofla -1));
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla te alcanza para el heladix ");
    alert(" y te sobra" + (dineroCofla -1.6));
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla te alcanza para el heladovich ");
    alert(" y te sobra" + (dineroCofla -1.7));
}
else if( dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla Te alcanza para el helardo");
    alert(" y te sobra" + (dineroCofla -1.8));
}
else if(dineroCofla >=2.9){
    alert("Cofla te alcanza para el helado con confites o para el el pote de 1/4")
    alert(" y te sobra" + (dineroCofla -2.9));
}

else{
    alert("No te alcanza para nada");
}

//Solucion Roberto
if(dineroRoberto >= 0.6 && dineroRoberto < 1 ){
    alert("Roberto te alcanza para el helado de agua");
    alert(" y te sobra " + (dineroRoberto -0.6))
}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert(" Roberto Te alcanza para el palito de crema");
    alert(" y te sobra " + (dineroRoberto -1))
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto te alcanza para el heladix ");
    alert(" y te sobra " + (dineroRoberto -1.6))
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto te alcanza para el heladovich ");
    alert(" y te sobra " + (dineroRoberto -1.7))
}
else if( dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto Te alcanza para el helardo");
    alert(" y te sobra " + (dineroRoberto -1.8))
}
else if(dineroRoberto >=2.9){
    alert("Roberto te alcanza para el helado con confites o para el el pote de 1/4")
    alert(" y te sobra " + (dineroRoberto -2.9))
}

else{
    alert("No te alcanza para nada");
}
//Solucion Pedro
if(dineroPedro >= 0.6 && dineroPedro < 1 ){
    alert("Pedro te alcanza para el helado de agua");
    alert(" y te sobran " + (dineroPedro - 0.6));
}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert(" Pedro Te alcanza para el palito de crema");
    alert("y te sobran" + (dineroPedro - 1));
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro te alcanza para el heladix ");
    alert(" y te sobran " + (dineroPedro -1.6) );
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro te alcanza para el heladovich ");
    alert(" y te sobran " + (dineroPedro - 1.7));
}
else if( dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro Te alcanza para el helardo");
    alert( " y te sobran " + (dineroPedro - 1.8));
}
else if(dineroPedro >=2.9){
    alert("Pedro te alcanza para el helado con confites o para el el pote de 1/4")
    alert(" y te sobran " + (dineroPedro - 2.9));
}

else{
    alert("No te alcanza para nada");
}
