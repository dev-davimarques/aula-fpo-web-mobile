import { Link } from "react-router";
import "../menu/index.css"

const Menu = () => {
    return(
        <>
            <nav className="navbar">
                <ul>
                    <Link to="/"><li>Pagina Principal</li></Link>
                    <Link to="/contato"><li>Contato</li></Link>
                    <Link to="/sobre"><li>Sobre</li></Link>
                </ul>
            </nav>
        </>
    );
};

export default Menu;