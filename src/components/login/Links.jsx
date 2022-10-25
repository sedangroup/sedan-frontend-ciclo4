import { Link } from "react-router-dom";
import styles from "./Links.module.css";

function Links() {
    return (
        <div className={styles.container}>
            <Link to={'/administrador/home'}>Administrador</Link>
            <Link to={'/cliente/home'}>cliente</Link>
            <Link to={'/colaborador/home'}>colaborador</Link>
        </div>
    )
}

export default Links;
