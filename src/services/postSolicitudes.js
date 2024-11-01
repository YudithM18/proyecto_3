async function postSolicitudes(nombreFormulario, apellidoFormulario, selector, codigoFormulario, salidaFormulario, regresoFormulario ) {
    try {
     
     const datoSolicitud = { 
        nombreFormulario,
        apellidoFormulario, 
        selector, 
        codigoFormulario, 
        salidaFormulario, 
        regresoFormulario
        
        };

        const response = await fetch("http://localhost:3001/solicitudes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datoSolicitud)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postSolicitudes}
