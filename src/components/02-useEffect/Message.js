import React, { useEffect } from 'react';

export default function Message() {
    useEffect(() => {
        console.log("Componente montado")
        return () => {
            console.log("Componente desmontado")
        }
    }, [])

    return (
        <div>
            <h3>Eres genial!</h3>
        </div>
    )
}
