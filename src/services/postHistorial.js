async function postHistorial(nombreFormulario, apellidoFormulario, selector, codigoFormulario, salidaFormulario, regresoFormulario, estado) {
    try {
     
        const histoSolicitud = { 
            nombreFormulario,
            apellidoFormulario, 
            selector, 
            codigoFormulario, 
            salidaFormulario, 
            regresoFormulario,
            estado
            };

        const response = await fetch("http://localhost:3001/historial", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(histoSolicitud)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postHistorial}
