async function deleteHistorial(id) {
    try {
        const response = await fetch(`http://localhost:3001/historial/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting solicitud with id ${id}`);
        }

        return { message: `Solicitud with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deleteHistorial };