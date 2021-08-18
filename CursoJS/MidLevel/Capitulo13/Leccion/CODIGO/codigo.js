
// const request = new XMLHttpRequest();
// //console.log(request)

// request.addEventListener("load",()=>{
//     //console.log(request.readyState)
//     let response;
//     if(request.status==200) response = request.response
//     else response = "No se encuentra el archivo"
//     console.log(response)
// })
// request.open("GET","informacion.txt")

// request.send();

// //console.log(request)


//------------------------------------------------------------
//------------------------------------------------------------
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