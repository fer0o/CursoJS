 /*
 function prueba (callback){
    callback("pedro");
}

prueba (nombre => console.log(nombre))
*/
/*//----------------------inicio codigo de callbacks(algo confuso)---------------------
class Persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;

    }
    
};

//console.log(persona = new Persona("Fernando Medellin", "fer0osennin"))
const data =[
    ["Fernando Medellin", "@fer0o"],
    ["Pamela Beltran", "@bltn.hao"],
    ["Ruben Medellin", "@chubas"],
    ["Alison Barrera "]
];

const personas=[];

for(let i = 0 ; i < data.length;i++){
    personas[i]= new Persona(data[i][0],data[i][1]);
}


//console.log(personas[0].nombre)

const obtenerPersona = (id, cb)=>{
    if(personas[id] == undefined){
        cb("no se ha encontrado la persona");
    }
    else{
        cb(null,personas[id],id)
    }

}

const obtenerInstagram = (id, cb)=>{
    if(personas[id].instagram == undefined){
        cb("No se ha encontrado instagram");
    }
    else{
        cb(null,personas[id].instagram)
    }
}
obtenerPersona (3,(err,persona,id)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(persona.nombre)
        obtenerInstagram(id,(err,instagram)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(instagram)
            }

        })
    }
})
*/

/*--------------------------empieza leccion de promesas-----------------------------*/
/*
let nombre = "pedrsfo"

const promesa = new Promise((resolve, reject)=>{
    if(nombre !== "pedro") reject("el nombre no es pedro")
    else resolve(nombre)
})

promesa.then((resultado)=>{
    console.log(resultado)
}).catch((e)=>{
    console.log(e)
})

*/

/*-----------------------------------------------------
class Persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;

    }
    
};
//console.log(persona = new Persona("Fernando Medellin", "fer0osennin"))
const data =[
    ["Fernando Medellin", "@fer0o"],
    ["Pamela Beltran", "@bltn.hao"],
    ["Ruben Medellin", "@chubas"],
    ["Alison Barrera "]
];

const personas=[];

for(let i = 0 ; i < data.length;i++){
    personas[i]= new Persona(data[i][0],data[i][1]);
}


//console.log(personas[0].nombre)

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id]==undefined) {
            reject("No se ha encontrado la persona")
        }
        else{
            resolve(personas[id])
        }
    })

}

const obtenerInstagram = (id)=>{
    return new Promise ((resolve,reject)=>{
        if(personas[id].instagram == undefined){
            reject("No se encuentra el instagram")
        }
        else{
            resolve(personas[id].instagram)
        }
    })
}

let id = 1
obtenerPersona (id).then((persona)=>{
    console.log("El usuario es: "+ persona.nombre)
    return obtenerInstagram(id)
}).then((instagram)=>{
    console.log("el instagram es:"+ instagram)
}).catch((e)=>{
    console.log(e)
})

------------------------------------------------------------------------*/
/*------------------await asynch------------------------*/


const objeto = {
    propiedad1: "valor 1",
    propiedad2: "valor 2",
    propiedad3: "valor 3"
};

const obtenerInformacion =(text)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(text)
        },3000)
    })
}

//obtenerInformacion().then(resultado => console.log(resultado))

//resultado = await obtenerInformacion();

// const mostrarResultado = async()=>{
//     resultado = await obtenerInformacion();
//     console.log(resultado)
// }
// mostrarResultado();

const  mostrarData = async ()=>{
    data1 = await obtenerInformacion ( " 1 : Te extranio Pame");
    data2 = await obtenerInformacion ( " 2 : Ojala me vuelvas a mandar mensaje");
    data3 = await obtenerInformacion ( " 3 : Me haria muy feliz ");
    console.log(data1)
    console.log(data2)
    console.log(data3)
}

mostrarData()