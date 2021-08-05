class App{
    constructor(descargas, puntuacion, peso){
        this. descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;

    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada")
        }

    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada")
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente")
        }

    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalda correctamente")
        }
    }
    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b> </br>
        Puntuacion: <b>${this.puntuacion}</b> </br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}


app1 = new App("16.000", "5 estrellas", "30 MB")
app2 = new App("1,436", "4 estrellas", "25 MB")
app3 = new App("1,000,000", "5 estrellas", "1356 MB")
app4 = new App("500,000", "4 estrellas", "136 MB")
app5 = new App("300,000", "3 estrellas", "65 MB")
app6 = new App("16.000", "3 estrellas", "80 MB")
app7 = new App("160,000", "5 estrellas", "330 MB")

document.write(`
${app1.appInfo()}<br> <br>
${app2.appInfo()}<br> <br>
${app3.appInfo()}<br> <br>
${app4.appInfo()}<br> <br>
${app5.appInfo()}<br> <br>
${app6.appInfo()}<br> <br>
${app7.appInfo()}<br> <br>
`)
