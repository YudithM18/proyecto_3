//Llamados a servidor
import { postUsers } from "../services/postUsers";
import { getUsers } from "../services/getUsers";


//Llamados HTML
const usuario = document.getElementById("usuario")
const correo = document.getElementById("correo")
const pass = document.getElementById("pass")
const btnCrear = document.getElementById("crear")
const texto = document.getElementById("texto")
const codigo = document.getElementById("codigo")

// EVENTO DE CLICK PARA BOTON DE REGISTRAR
btnCrear.addEventListener("click", function () {
   
  

    let valor = correo.value
    let valor2 = usuario.value
    let valor3 = pass.value
    let valor4 = codigo.value

    let resultado1 = valor.trim()
    let resultado2 = valor2.trim()
    let resultado3= valor3.trim()
    let resultado4= valor4.trim()


    // Validacion para no permitir que se registre 2 veces una persona con el mismo correo
    validar()
    async function validar() {
      const infoUsers = await getUsers()


      // Filtro solo para los correos y guardarlos en una variable
      const correoExistente = infoUsers.filter(element => element.correo === resultado1);

   
      
 // Condicional para el correo repetido
      if (correoExistente.length > 0) {

         texto.innerHTML = "ESTA CUENTA YA SE ENCUENTRA REGISTRADA"
          //TIEMPO ESTABLECIDO PARA PODER LEER EL MENSAJE ANTES DE QUE SE REGARGUE LA PAGINA
         setTimeout(() => {
            location.reload()
           }, 2500);

         
      }else{

        // Condicional para No permitir que se guarden campos vacios
         if (resultado1 === "" || resultado2 === "" || resultado3 === "" || resultado4 === "") {


            texto.innerHTML= "INGRESAR DATOS SOLICITADOS"
      //TIEMPO ESTABLECIDO PARA PODER LEER EL MENSAJE ANTES DE QUE SE REGARGUE LA PAGINA
            setTimeout(() => {
              location.reload()
             }, 2500);
     
     
     
     }  else{
     
           // Validacion para guardar en el servidor y permitir el registro de la persona
           if (correo.value.length > 0  && usuario.value.length > 0 && pass.value.length > 0 && codigo.value.length > 0) {
    
     
              texto.innerHTML= "USTED HA SIDO REGISTRADO CON EXÍTO"
     
              postUsers(usuario.value, correo.value, pass.value, codigo.value)
     
             // Para que despues de registrar lo lleve a iniciar sesion
              setTimeout(() => {
                 window.location.href ="./inicioSesion.html"
              }, 2500);
        }// CIERRE DE CONDICIONAL
     } //CIERRE DE CONDICIONAL

      }
    } /// CIERRE DE FUNCION PARA LLAMAR LOS DATOS DE SERVIDOR



 





})///CIERRE DE BOTON PARA REGISTRAR