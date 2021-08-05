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
class CelularAltaGama extends celulares{
    constructor(color, peso, resolución_pantalla, resolución_camara,ram, resolucion_camara_extra){
        super(color, peso, resolución_pantalla, resolución_camara,ram)
        this.resolucion_camara_extra = resolucion_camara_extra;
    }
    videoCamaraLenta(){
        alert("Video en camara lenta")
    }
    reconomientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }
    infoAlfaGama(){
        return this.infoCelular() + `Resolucion camara extra :<b>${this.resolucion_camara_extra}</b>`
    }

    
}
/*
celular1 = new celulares ( "rojo", "150 gr","Full HD","48 mpx","4GB");
celular2 = new celulares ( "blanco", "165 gr", "1920 x 780 pxls", "28 mpx", "6GB");
celular3 = new celulares ( "plateado", "175gr", "OLED", "68 mpx", "8GB")
*/
celular1 = new CelularAltaGama ( "verde", "145 gr", "Oled", "68 mpx", "8GB","24 mpx")
celular2 = new CelularAltaGama ( "negro", "167 gr", "1820 x 1280 pxl", "48 pxl", "6GB", "24 mpxl")
/*
celular1.botnDeEncendido()
celular1.tomarFoto()
celular1.grabarVideo()
celular1.reiniciar()
celular1.botnDeEncendido()
*/
document.write(`
${celular1.infoAlfaGama()} <br><br>
${celular2.infoAlfaGama()} </br>
`)