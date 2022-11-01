import Footer from "../Footer";

function Formulario({nombre}) {
    const mensaje = "hola sedan"
    return (
        <div>
            <h1>{mensaje+' '}{nombre}</h1>
            <form>
                <input placeholder="usuario"/>
                <input placeholder="contrasena"/>
            </form>
            <Footer/>
        </div>
    )
}

export default Formulario;
