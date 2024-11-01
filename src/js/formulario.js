//Llamados a servidor
import { getSolicitudes } from "../services/getSolicitudes";
import { postSolicitudes } from "../services/postSolicitudes";
import { postHistorial } from "../services/postHistorial";
import { deleteSolicitudes } from "../services/deleteSolicitudes";

//Declaración de HTML

const nombreF = document.getElementById("nombreFormulario");
const apellidoF = document.getElementById("apellidoFormulario");
const codigoF = document.getElementById("codigoFormulario");
const salidaF = document.getElementById("salidaFormulario");
const regresoF = document.getElementById("regresoFormulario");
const btnS = document.getElementById("btnS");
const btnC = document.getElementById("btnC")
const listaSolicitud = document.getElementById("listaSolicitud");
const selector = document.getElementById("selector");
const checkBox = document.getElementById("checkbox")
const anuncio = document.getElementById("anuncio");
const header = document.getElementById("header")

//Validación del codigo del usuario
let validCod = localStorage.getItem("codigo")

//Boton de historial para los administradores
if (validCod === "adm01") {
    btnS.disabled = true;
    const btnH = document.createElement("button");
    btnH.innerHTML = "Historial";
    btnH.className ="btnHis"
    header.appendChild(btnH);
    btnH.addEventListener("click", function () {
        window.location.href = "http://localhost:1234/historial.html"
    })
    
    
}


//CheckBox        
btnS.disabled = true;
anuncio.innerHTML = "Aceptar los terminos y condiciones"

checkBox.addEventListener('change', function () {
    if (this.checked) {
        window.open("https://docs.google.com/document/d/1ibON2MLXuw9coBK2lJI2G7eycQ0xgUMHH8NJKEzJ-kw/edit#heading=h.l50hjutsxjta", "Terminos y condiciones", "width= 600, height= auto")
        btnS.disabled = false;
        anuncio.innerHTML = "Puede enviar el formulario"

    }
    
})
//Objeto de la información de la solicitud

nuevaSolicitud()
async function nuevaSolicitud() {
    const nSolicitud = await getSolicitudes()
     ///FOR PARA RECORRER LOS DATOS Y ASI MOSTRAR SOLICITUDES PENDIENTES PARA ADMINISTRACION
for (let index = 0; index < nSolicitud.length; index++) {
  
    

//Llamado fantasma de la solicitud
const div = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
const p5 = document.createElement("p");
const p6 = document.createElement("p");
const p7 = document.createElement("p7")
const btnA = document.createElement("button");
const btnR = document.createElement("button");

//Condicional de administrador
if (validCod != "adm01") {
    btnA.disabled = true;
    btnR.disabled = true;
   
} else {
    btnA.disabled = false;
    btnR.disabled = false;
    
}

//Creación del llamado fantasma
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
div.appendChild(p4);
div.appendChild(p5);
div.appendChild(p6);
div.appendChild(p7);
div.appendChild(btnA);
div.appendChild(btnR);
p1.className = "pFants"
p2.className = "pFants"
p3.className = "pFants"
p4.className = "pFants"
p5.className = "pFants"
p6.className = "pFants"
p7.className = "pFants"
btnA.className = "bFants"
btnR.className = "bFants"
div.className = "divFants"

//Contenido del llamado fantasma
p1.innerHTML = nSolicitud[index].nombreFormulario;
p2.innerHTML = nSolicitud[index].apellidoFormulario;
p3.innerHTML = nSolicitud[index].codigoFormulario;
p4.innerHTML = nSolicitud[index].selector;
p5.innerHTML = nSolicitud[index].salidaFormulario;
p6.innerHTML = nSolicitud[index].regresoFormulario;
p7.innerHTML = "Pendiente";
btnA.innerHTML = "Aceptar";
btnR.innerHTML = "Rechazar";
listaSolicitud.appendChild(div);


///EVENTO PARA BOTON DE ACEPTAR SOLICITUDES
btnA.addEventListener("click", function () {
    //estadoF = "Aceptada"
    const solicitudObj = {
        nombre: nSolicitud[index].nombreFormulario,
        apellido: nSolicitud[index].apellidoFormulario,
        codigo: nSolicitud[index].codigoFormulario,
        sede:nSolicitud[index].selector,
        registroSalida:nSolicitud[index].salidaFormulario,
        registroRegreso:nSolicitud[index].regresoFormulario,
        estado: "Aceptada"
    }
    actualizarSolicitud()
    async function actualizarSolicitud() {
        postHistorial(solicitudObj)
    }


    deleteSolicitudes(nSolicitud[index].id)
    listaSolicitud.removeChild(div)
})//CIERRE DE BOTON PARA ACEPTAR SOLICITUDES

///EVENTO PARA BOTON DE RECHAZAR SOLICITUDES
btnR.addEventListener("click", function () {
    //estadoF = "Rechazada"
    //Objeto de la información de la solicitud
const solicitudObj = {
    nombre: nSolicitud[index].nombreFormulario,
    apellido: nSolicitud[index].apellidoFormulario,
    codigo: nSolicitud[index].codigoFormulario,
    sede:nSolicitud[index].selector,
    registroSalida:nSolicitud[index].salidaFormulario,
    registroRegreso:nSolicitud[index].regresoFormulario,
    estado: "Rechazada"
}
    actualizarSolicitud()
    async function actualizarSolicitud() {
        postHistorial(solicitudObj)
    }

    deleteSolicitudes(nSolicitud[index].id)
    listaSolicitud.removeChild(div)
}) //CIERRE DE BOTON PARA RECHAZAR
}}

//EVENTO PARA BOTON DE ENVIAR SOLICITUD 
btnS.addEventListener("click", function () {


//Llamado fantasma de la solicitud
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    const p6 = document.createElement("p");
    const p7 = document.createElement("p7")
    const btnA = document.createElement("button");
    const btnR = document.createElement("button");

//Condicional de administrador
    if (validCod != "adm01") {
        btnA.disabled = true;
        btnR.disabled = true;
    } else {
        btnA.disabled = false;
        btnR.disabled = false;
        
    }

//Creación del llamado fantasma
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(p6);
    div.appendChild(p7);
    div.appendChild(btnA);
    div.appendChild(btnR);
    div.className = "divFants"

//Contenido del llamado fantasma
    p1.innerHTML = nombreF.value;
    p2.innerHTML = apellidoF.value;
    p3.innerHTML = codigoF.value;
    p4.innerHTML = selector.value;
    p5.innerHTML = salidaF.value;
    p6.innerHTML = regresoF.value;
    p7.innerHTML = "Pendiente";
    btnA.innerHTML = "Aceptar";
    btnR.innerHTML = "Rechazar";
    listaSolicitud.appendChild(div);




//Validación del formulario y POST
subirSolicitud()
async function subirSolicitud() {
    if (!nombreF.value || !codigoF.value || !selector.value || !salidaF.value || !regresoF.value) {
        anuncio.innerHTML = "Completar la información"
    }
    await postSolicitudes(nombreF.value, apellidoF.value, selector.value, codigoF.value, salidaF.value, regresoF.value);
    anuncio.innerHTML="Solicitud enviada"

}



//Boton de aceptar y rechazar
btnA.addEventListener("click", function () {
    console.log("Aceptado")
    //estadoF = "Aceptada"
    const solicitudObj = {
        nombre: nombreF.value,
        apellido: apellidoF.value,
        codigo: codigoF.value,
        sede:selector.value,
        registroSalida:salidaF.value,
        registroRegreso:regresoF.value,
        estado: "Aceptada"
    }
    actualizarSolicitud()
    async function actualizarSolicitud() {
        postHistorial(solicitudObj)
    }
    listaSolicitud.removeChild(div)
})

btnR.addEventListener("click", function () {
    //estadoF = "Rechazada"
    //Objeto de la información de la solicitud
const solicitudObj = {
    nombre: nombreF.value,
    apellido: apellidoF.value,
    codigo: codigoF.value,
    sede:selector.value,
    registroSalida:salidaF.value,
    registroRegreso:regresoF.value,
    estado: "Rechazada"
}
    actualizarSolicitud()
    async function actualizarSolicitud() {
        postHistorial(solicitudObj)
    }
    console.log("Negado")
    listaSolicitud.removeChild(div)
})

//
})


//Boton de cerrar sesión
btnC.addEventListener("click", function () {
    window.location.href = "./inicioSesion.html"
})