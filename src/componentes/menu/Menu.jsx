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
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/portafolio">Portafolio</Link>
            </li>
            <li>
                <Link to="/contacto">Contacto</Link>
            </li>
        </ul>
    )
}

export default Menu;