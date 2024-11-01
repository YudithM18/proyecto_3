
//LLAMADOS A SERVIDOR
import { getHistorial } from "../services/getHistorial";
import { deleteHistorial } from "../services/deleteHistorial";



//LLAMADOS AL HTML
const selectorHist = document.getElementById("selectorHist")

const crearfilas = document.getElementById("crearfilas")

 
//FUNCION PARA LLAMAR AL GET
history()
async function history() {


  //VARIABLE QUE CONTIENE LOS DATOS DEL GET
    let datSolicitud = await getHistorial()

   //RECORER LOS DATOS DEL GET
    for (let index = 0; index < datSolicitud.length; index++) {
      


      //CREACION DE TODOS LOS ELEMENTOS NECESARIO PARA MOSTRAR LOS DATOS
      const columna= document.createElement("tr")

        const fil1 = document.createElement("th")
        const fil2 = document.createElement("th")
        const fil3 = document.createElement("th")
        const fil4 = document.createElement("th")
        const fil5 = document.createElement("th")
        const fil6 = document.createElement("th")
        const fil7 = document.createElement("th")
        const fil8 = document.createElement("th")

       const etiquetaP = document.createElement("p");
       const etiquetaP2 = document.createElement("p");
       const etiquetaP3 = document.createElement("p");
       const etiquetaP4 = document.createElement("p");
       const etiquetaP5 = document.createElement("p");
       const etiquetaP6 = document.createElement("p");
       const etiquetaP7 = document.createElement("p");
       

       columna.appendChild(fil1)
       columna.appendChild(fil2)
       columna.appendChild(fil3)
       columna.appendChild(fil4)
       columna.appendChild(fil5)
       columna.appendChild(fil6)
       columna.appendChild(fil7)
       columna.appendChild(fil8)

       fil1.appendChild(etiquetaP)
       fil2.appendChild(etiquetaP2)
       fil3.appendChild(etiquetaP3)
       fil4.appendChild(etiquetaP4)
       fil5.appendChild(etiquetaP5)
       fil6.appendChild(etiquetaP6)
       fil7.appendChild(etiquetaP7)

       //Boton Delete
       const btnD = document.createElement("button")
       btnD.innerHTML = "Delete";
      
       fil8.appendChild(btnD)


       ///EVENTO PARA ELIMINAR DEL SERVIDOR
       btnD.addEventListener("click",function () {

     
       //SIRVE PARA QUE AL BORRAR RECONOSCA TODO LO QUE SE ELIMINA
       deleteHistorial(datSolicitud[index].id)
       // PARA QUE SE ELIMINE LA COLUMNA
      columna.remove()


  
        
        
    
   
       })
   
      

       



       //INSERTAR LOS DATOS A SUS LUGARES CORRESPONDIENTES
       etiquetaP.textContent = datSolicitud[index].nombreFormulario.nombre

       etiquetaP2.textContent = datSolicitud[index].nombreFormulario.apellido

       etiquetaP3.textContent = datSolicitud[index].nombreFormulario.sede

       etiquetaP4.textContent =datSolicitud[index].nombreFormulario.codigo

       etiquetaP5.textContent = datSolicitud[index].nombreFormulario.registroSalida

       etiquetaP6.textContent = datSolicitud[index].nombreFormulario.registroRegreso

       etiquetaP7.textContent = datSolicitud[index].nombreFormulario.estado
       
      
      crearfilas.appendChild(columna)
      
      
      /// EVENTO PARA EL BUSCADOR
      const buscar = document.getElementById("buscar")


      buscar.addEventListener("input",  function () {
      
     ///FILTROS PARA BUSCAR POR NOMBRE O FECHAS
        const usersSol = datSolicitud.filter(element =>element.nombreFormulario.nombre === buscar.value)

        const dateSol = datSolicitud.filter(element => element.nombreFormulario.registroRegreso == buscar.value)


       ////CONDICIONAL PARA BUSCAR POR NOMBRE
         if (usersSol.length>0) {

          /// DESABILITACION DE LAS COLUMNAS EXISTENTES 
          columna.style.display="none"
  
         /// CREACION DE LAS COLUMNAS QUE ALMACENAN LOS RESULTADOS DE LA BUSQUEDA 
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


          ///INGRESO DE DATOS CON NOMBRE IGUALES
            etiquP1.textContent = usersSol[index].nombreFormulario.nombre
            etiquP2.textContent = usersSol[index].nombreFormulario.apellido
            etiquP3.textContent = usersSol[index].nombreFormulario.sede
            etiquP4.textContent = usersSol[index].nombreFormulario.codigo
            etiquP5.textContent = usersSol[index].nombreFormulario.registroRegreso
            etiquP6.textContent = usersSol[index].nombreFormulario.registroSalida
            etiquP7.textContent = usersSol[index].nombreFormulario.estado


          crearfilas.appendChild(columnita)

            
          
       
     
        } else{
          ///CONDICIONAL PARA BUSCAR POR FECHAS
            if (dateSol.length > 0) {
              
              //PARA OCULTAR TODOS LOS DATOS INECESARIOS
              columna.style.display="none"
         ////CREACION DE ELEMENTOS PARA MOSTRAR DATOS EN PANTALLA
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


              ///INGRESO DE LOS DATOS CON FECHA IGUAL
            etiquP1.textContent = dateSol[index].nombreFormulario.nombre
            etiquP2.textContent = dateSol[index].nombreFormulario.apellido
            etiquP3.textContent = dateSol[index].nombreFormulario.sede
            etiquP4.textContent = dateSol[index].nombreFormulario.codigo
            etiquP5.textContent = dateSol[index].nombreFormulario.registroRegreso
            etiquP6.textContent = dateSol[index].nombreFormulario.registroSalida
            etiquP7.textContent = dateSol[index].nombreFormulario.estado


          crearfilas.appendChild(columnita)


              
            }
        }
       
        


    })


         // CONSTANTE PARA EL SELECTOR
       const aceptado = document.getElementById("selectorHist")
   
 
/// EVENTO PARA SELECTOR
aceptado.addEventListener("click",function () {
  
  
  /// CONDICIONAL PARA QUE CADA VEZ QUE SE SELECCIONE ACEPTADOS LLEVE A LA PERSONA A LA PAGINA CORRESPONDIENTE 
  if (selectorHist.value==="aceptados") {

    window.location.href = "soliAceptados.html"

 }else{

  ///CONDICIONAL PARA QUE ME FILTRE SOLO LAS SOLICITUDES RECHAZADAS
    if (selectorHist.value === "rechazados") {
       
        ///FILTRO PARA ALMACENAR SOLO LAS SOLICITUDES RECHAZADAS
      const estadoRechaz =  datSolicitud.filter(element => element.nombreFormulario.estado === "Rechazada");
     
      

       /// OCULTACION DE DATOS INECESARIO
      columna.style.display="none"


      //CREACION DE LOS ELEMNTOS PARA MOSTRAR DATOS EN PANTALLA
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


      //INGRESO DE LOS DATOS DE LAS SOLICITUDES RECHAZADAS

    etiquP1.textContent = estadoRechaz[index].nombreFormulario.nombre
    etiquP2.textContent = estadoRechaz[index].nombreFormulario.apellido
    etiquP3.textContent = estadoRechaz[index].nombreFormulario.sede
    etiquP4.textContent = estadoRechaz[index].nombreFormulario.codigo
    etiquP5.textContent = estadoRechaz[index].nombreFormulario.registroRegreso
    etiquP6.textContent = estadoRechaz[index].nombreFormulario.registroSalida
    etiquP7.textContent = estadoRechaz[index].nombreFormulario.estado


   crearfilas.appendChild(columnita)


     
      
      
        }
      }
 
    })



  }


}






    
 