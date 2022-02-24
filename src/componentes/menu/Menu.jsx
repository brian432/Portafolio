import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ active, setActive }) => {
    const location =useLocation();
    useEffect(()=>{
        setActive(false)
    }, [location]);
    return (
        <ul className={`menu ${active ? 'active' : ''}`}>
            <li>
                <Link to="/portafolio">Home</Link>
            </li>
            <li>
                <Link to="/portafolio/portafolio">Portafolio</Link>
            </li>
            <li>
                <Link to="/portafolio/contacto">Contacto</Link>
            </li>
        </ul>
    )
}

export default Menu;