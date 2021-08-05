let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocolo = window.location.protocol;

//manejo de HTML
let html = `Protocolo: <b>${protocolo}</b><br><br>`;
html+=`Hostname: <b>${hostname}</b><br><br>`;
html += `Pathname: <b>${pathname}</b><br><br>`;
html += `URL completa <b>${href}</b><br><br>`;


document.write(html)