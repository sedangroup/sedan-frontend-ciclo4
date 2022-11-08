function AlertaProducto() {
    return (
        <div>
            <h2>Cuidado con este producto</h2>
            <p>Promedio ventas por mes {3}</p>
            <p>promedio calificacion usuarios {2.9}</p>
            <div>
            <p>frase o palabra mas repetida en calificaciones:</p>
            <p>{`"Malo", "no sirve", "se daña rapido"`}</p>

            </div>
            
        </div>
    )
}

export default AlertaProducto;
