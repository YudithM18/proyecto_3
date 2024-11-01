// LLAMADA AL SERVIDOR
import { getHistorial } from "../services/getHistorial";

//LLAMADO AL HTML
const crearfilas = document.getElementById("crearfilas")

////FUNCION PARA LLAMAR AL GET
historialAceptada()
async function historialAceptada() {

    //VARIABLE QUE CONTIENE AL GET
    let datosAceptaa = await getHistorial()

    //PARA RECORRER LOS DATOS DEL GET
    for (let index = 0; index < datosAceptaa.length; index++) {
        
      //FILTRO PARA TRAER SOLO SOLICITUDES ACEPTADAS
        const estadoAcep = datosAceptaa.filter(element => element.nombreFormulario.estado === "Aceptada")

      
        
        ///CREACION DE ELEMENTOS PARA QUE SE MUESTRE AUTOMATICAMENTE EN PANTALLA
        let columnita = document.createElement("tr")

      let filit1 = document.createElement("th")
      let filit2 = document.createElement("th")
      let filit3 = document.createElement("th")
      let filit4 = document.createElement("th")
      let filit5 = document.createElement("th")
      let filit6 = document.createElement("th")
      let filit7 = document.createElement("th")


      let etiquP1 = document.createElement("p")
      let etiquP2 = document.createElement("p")
      let etiquP3 = document.createElement("p")
      let etiquP4 = document.createElement("p")
      let etiquP5 = document.createElement("p")
      let etiquP6 = document.createElement("p")
      let etiquP7 = document.createElement("p")


      filit1.appendChild(etiquP1)
      filit2.appendChild(etiquP2)
      filit3.appendChild(etiquP3)
      filit4.appendChild(etiquP4)
      filit5.appendChild(etiquP5)
      filit6.appendChild(etiquP6)
      filit7.appendChild(etiquP7)


      columnita.appendChild(filit1)
      columnita.appendChild(filit2)
      columnita.appendChild(filit3)
      columnita.appendChild(filit4)
      columnita.appendChild(filit5)
      columnita.appendChild(filit6)
      columnita.appendChild(filit7)


      //INGRESO DE VALORES A LOS ELEMENTOS

    etiquP1.textContent = estadoAcep[index].nombreFormulario.nombre
    etiquP2.textContent = estadoAcep[index].nombreFormulario.apellido
    etiquP3.textContent = estadoAcep[index].nombreFormulario.sede
    etiquP4.textContent = estadoAcep[index].nombreFormulario.codigo
    etiquP5.textContent = estadoAcep[index].nombreFormulario.registroSalida
    etiquP6.textContent = estadoAcep[index].nombreFormulario.registroRegreso
    etiquP7.textContent = estadoAcep[index].nombreFormulario.estado

    
   crearfilas.appendChild(columnita)






  



    }
    
}
