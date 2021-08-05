let tp = " 100 minutos trabajos prácticos ";
let estudio = " 100 min de estudio ";
let trabajo = " 240 min de trabajo ";
let quehacer = " 30 min de quehacer "
let descanso = " 10 min de descanso "

console.log(" TAREAS ")
for(var i =0 ;i<14;i++){
    if(i ==0){
        console.group(" Semana 1 ");
    }
    console.groupCollapsed(" dia " + (i + 1));

    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(quehacer);
    console.groupEnd();
    if(i==7){
        console.groupEnd();
        console.groupCollapsed(" Semana 2 ")
    }
}

console.groupEnd();
console.groupEnd();

console.log("Pobre chavon va a morir")