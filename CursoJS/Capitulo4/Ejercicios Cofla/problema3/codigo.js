
    //logica el primer elemento de la clase es el profesor 
   let materias = {
       //lo mas parecido a un array asociativo
       introCarrera:["Irma García","Rodrigo","Juancho", "Erick", "Cofla", "Saul"],
       fundamentosProgamacion:["Irma García","Cofla", "Maria", "Juan", "Juancho"],
       matematicasComputcionales:["Lourdes Quesada","Rodrigo","Maria", "Juan", "Erick"],
       Matematicas1:["Iliana Carrillo","Roberto", "Dante", "Rigo", "Miriam", "Cristina", "Jorge"],
       Fisica1:["Pablo Paniagua","Cofla","Roberto", "Dante", "Rigo","Maria", "Juan", "Juancho","Erick", "Saul" ],
       Administracion:["Pedro Carreon","Cofla","Roberto", "Dante", "Rigo","Maria", "Juan", "Juancho","Erick", "Saul","Monica", "Sandra" ]

   }
   const inscribir=(alumno, materia)=>{
       personas = materias[materia]
       if(personas.length >= 16){
           document.write(`lo siento <b>${alumno}</b>, la materia de <b>${materia}</b> ya esta llena <br> <br>`)
       }
       else{
           personas.push(alumno);
           if(materia == "IntroCarrera"){
               materias={
                   introCarrera:personas,
                   fundamentosProgamacion:materias['fundamentosProgamacion'],
                   matematicasComputcionales:materias['matematicasComputcionales'],
                   Matematicas1:materias['Matematicas1'],
                   Fisica1:materias['Fisica1'],
                   Administracion:materias['Administracion']
               }
           }
           else if(materia == "fundamentosProgamacion"){
               materias ={
                   introCarrera:materias['introCarrera'],
                   fundamentosProgamacion:personas,
                   matematicasComputcionales:materias['matematicasComputcionales'],
                   Matematicas1:materias['Matematicas1'],
                   Fisica1:materias['Fisica1'],
                   Administracion:materias['Administracion']
               }
           }
           else if(materia == "matematicasComputcionales"){
               materias ={
                introCarrera:materias['introCarrera'],
                fundamentosProgamacion:materias['fundamentosProgamacion'],
                matematicasComputcionales:personas,
                Matematicas1:materias['Matematicas1'],
                Fisica1:materias['Fisica1'],
                Administracion:materias['Administracion']
               }
           }
           else if(materia == "Matematicas1"){
               materias={
                introCarrera:materias['introCarrera'],
                fundamentosProgamacion:materias['fundamentosProgamacion'],
                matematicasComputcionales:materias['matematicasComputcionales'],
                Matematicas1:personas,
                Fisica1:materias['Fisica1'],
                Administracion:materias['Administracion']
               }
           }
           else if(materia == "Fisica1"){
                materias={
                    introCarrera:materias['introCarrera'],
                    fundamentosProgamacion:materias['fundamentosProgamacion'],
                    matematicasComputcionales:materias['matematicasComputcionales'],
                    Matematicas1:materias['Matematicas1'],
                    Fisica1:personas,
                    Administracion:materias['Administracion']
                }
           }
           else if(materia == "Administracion"){
               materias ={
                introCarrera:materias['introCarrera'],
                fundamentosProgamacion:materias['fundamentosProgamacion'],
                matematicasComputcionales:personas,
                Matematicas1:materias['Matematicas1'],
                Fisica1:materias['Fisica1'],
                Administracion:personas
               }
           }
           document.write(`Bien alumno ${alumno} estas inscrito en la materia de ${materia} correctamente <br> <br>`)
        }
        
       }
document.write(materias['Administracion']+"<br>"+"<br>")
    
inscribir("Nacho", "Administracion")
inscribir("GUillermo", "Administracion")
inscribir("Eustaquio", "Administracion")
inscribir("Raul", "Administracion")
inscribir("Peje", "Administracion")
inscribir("Lagarto", "Administracion")

document.write("<br>"+materias['Administracion']+"<br>"+"<br>")


