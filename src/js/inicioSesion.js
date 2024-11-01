//Llamadas al servidor
import { getUsers } from "../services/getUsers"

// Llamadas al html
const userOrGmail = document.getElementById("userOrGmail")

const password = document.getElementById("password")

const inicio = document.getElementById("inicio")

const texto = document.getElementById("texto")





// EVENTO PARA EN BOTON DE SESION
inicio.addEventListener("click", async function () {
    
    //LLamada de los datos en el servidor
    let datos = await getUsers()

   


    
   // Recorre los datos del servidor
    for (let index = 0; index < datos.length; index++) {
        

    let valor = userOrGmail.value
    let valor2 = password.value
    let resultadopassword = valor2.trim()
    let resultadoGmail = valor.trim()

   
      //Condicional para No permitir que se guarden campos vacios
       if (resultadoGmail === ""  || resultadopassword === "" ) {

    

         texto.innerHTML = "NO SE HAN ENCONTRADO DATOS EN DONDE SE SOLICITA, POR FAVOR LLENAR CORRECTAMENTE LOS DATOS SOLICITADOS"
            
        
         
        


        }  else {

             
               //Condicional para buscar en el servidor los datos que se ingresaron para iniciar sesion
                
                if ((datos[index].usuario === userOrGmail.value || datos[index].correo === userOrGmail.value) && (datos[index].pass === password.value)){

                    texto.innerHTML = "TUS DATOS SE ENCUENTRAN REGRISTRADO... HAS ENTRADO CON EXÍTO"
                   

                    //Para guardar los codigos ( adm01, prof02, estud03 )
                    localStorage.setItem("codigo", datos[index].codigo)

                    // para que despues de ingresar con exito lo lleve al formulario
                    setTimeout(() => {
                        window.location.href ="./formulario.html"
                     }, 3500);
                     break
                
                }else{
                    //Para anunciar en la pagina que si no se cumple la condicional anterior eso significa que hay un problema 
                    texto.innerHTML = "SE HAN INGRESADOS DATOS INCORRECTOS O INEXISTENTES POR FAVOR REVISAR DATOS O REGISTRASE NUEVAMENTE"

                }///CIERRE DE CONDICIONAL


            }///CIERRE DE CONDICIONAL

        }///CIERRE DE CONDICIONAL

            
            
        
    

                      

     
})//CIERRE DEL BOTON PARA INICIAR SESION