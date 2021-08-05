class celulares {
    constructor(color, peso, resolución_pantalla, resolución_camara,ram){
        this.color = color;
        this.peso = peso;
        this.resolución_pantalla = resolución_pantalla;
        this.resolución_camara = resolución_camara;
        this.ram = ram;
        //
        this.encendido = false;


    }
    //creacion de metodos//
    //metodo encender
    botnDeEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }
        else{
            alert("el celular ya esta apagado")
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        }
        else{
            alert("El celular esta apagado")
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de : ${this.resolución_camara}`)
    }
    grabarVideo(){
        alert(`vdeo grabado en una resolucion de: ${this.resolución_camara}`)
    }
    infoCelular(){
        return `
        Color:                          <b>${this.color}</b> </br>
        Peso:                           <b>${this.peso} </b> </br>
        Resolución de Pantalla:         <b>${this.resolución_pantalla} </b> </br>
        Resolución de Camara:           <b>${this.resolución_camara} </b> </br>
        Resolución de Video:            <b>${this.resolución_camara} </b> </br>
        Memoria Ram:                    <b>${this.ram} </b> </br>
        
        `
    }
}

celular1 = new celulares ( "rojo", "150 gr","Full HD","48 mpx","4GB");
celular2 = new celulares ( "blanco", "165 gr", "1920 x 780 pxls", "28 mpx", "6GB");
celular3 = new celulares ( "plateado", "175gr", "OLED", "68 mpx", "8GB")
/*
celular1.botnDeEncendido()
celular1.tomarFoto()
celular1.grabarVideo()
celular1.reiniciar()
celular1.botnDeEncendido()
*/
document.write(`
${celular1.infoCelular()} <br>
${celular2.infoCelular()} <br>
${celular3.infoCelular()} <br>
`)