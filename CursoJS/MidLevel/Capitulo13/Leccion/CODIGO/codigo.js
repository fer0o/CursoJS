//  let peticion;
//  if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
//  else peticion = new ActiveXObject("Microsoft.XMLHTTP");

// //const peticion = new XMLHttpRequest();

// peticion.addEventListener("load",()=>{
//     let respuesta;
//     if(peticion.status ==200) respuesta = peticion.response;
//     else respuesta = "No se ha encontrado el recurso";
//     console.log(JSON.parse(respuesta).edad)
// });

// peticion.open("GET", "informacion.txt");
// peticion.send();


/* ahora con post */

//   let peticion;
//   if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
//   else peticion = new ActiveXObject("Microsoft.XMLHTTP");

//  //const peticion = new XMLHttpRequest();

//  peticion.addEventListener("load",()=>{
//      let respuesta;
//     if(peticion.status ==200 || peticion.status == 201) respuesta = peticion.response;
//      else respuesta = "No se ha encontrado el recurso";
//     console.log(JSON.parse(respuesta))
// });

//  peticion.open("POST", "https://reqres.in/api/users");
//  peticion.setRequestHeader("Content-type","application/json;charset=UTF8")
//  peticion.send(JSON.stringify({
//     "name": "morpheus",
//     "job": "leader"
//  }));

//------------------------------fetch-------------------------------------------------------

/*
fetch ("https://reqres.in/api/unknown/2")

//fetch se usa con promnesas, osea que para acceder a los valores es necesario usar un .then para llamar una promesa
//por default el fetch tiene el metodo get para obtener informacion de las apis
//pero se tiene que hacer otra cosa para un metodo post


.then(res => res.text())
.then(res => console.log(JSON.parse(res)))
console.log()
*/


//-----para metodo post------
// fetch("https://reqres.in/api/users",{
//     method:"POST", // se especifica que metodo va a ser, en este caso POST
//     body: JSON.stringify({                                 //->aqui como se accede como un json hay que deserializar el json con el stringify
//         "nombre" : "Pamela ",
//         "apellido": "Beltran",                   //---> Datos
//     }),
//     headers:{"Content-type": "application/json"}

// }) //---> se cierra el fetch


// .then(res=>res.json())
// .then(res => console.log(res))

// axios.post("https://reqres.in/api/users",{
//     "nombre" : "Pamela",
//     "apellido": "Beltran",
//     "Instagram" : "bltn.hao"
// }).then(res=>console.log(res))
//------------------------------------axios en metodo post
// axios.post("https://reqres.in/api/users",{
//      "nombre" : "Pamela",
//      "apellido": "Hao",
//     "Instagram" : "fssdfsdfsdf"
//  }).then(res=>{
//      console.log(res)
//  })

//----------------------------------------axios metodo get----------------
//  axios("informacion.txt")
//     .then(res=>console.log(res))

//-------async await con axios

const getName = async ()=>{
    let resultado = await axios("informacion.txt");
    //let resultado = await resultado.json();
    let div = document.createElement("DIV")
    div.innerHTML =resultado.data.nombre;
    div.classList.add("nombre")
    document.body.appendChild(div)

}



const getLastName = async ()=>{
    let resultado = await axios("informacion.txt");
    //let resultado = await resultado.json();
    let div = document.createElement("DIV")
    div.innerHTML =resultado.data.apellido;
    div.classList.add("apellido")
    document.body.appendChild(div)
}

const getAge = async ()=>{
    let resultado = await axios("informacion.txt");
    //let resultado = await resultado.json();
    let div = document.createElement("DIV")
    div.innerHTML =resultado.data.edad;
    div.classList.add("edad")
    document.body.appendChild(div)
}



document.getElementById('getName').addEventListener("click", getName);
document.getElementById('getLastName').addEventListener("click", getLastName);
document.getElementById('getAge').addEventListener("click", getAge);