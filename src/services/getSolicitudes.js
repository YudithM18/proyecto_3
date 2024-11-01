
async function getSolicitudes() {
    try {
//Realiza una solicitud GET para obtener las solicitudes
        const response = await fetch('http://localhost:3001/solicitudes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching solicitudes');
        }

   
     const data = response.json();
        return data  } catch (error) {
        console.error('Error fetching solicitudes:', error);
        throw error;
    }
}

export { getSolicitudes };
