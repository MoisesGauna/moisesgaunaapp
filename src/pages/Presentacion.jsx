

import '../components/Presentacion.css';
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const Presentacion = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='titulo-presentacion'>
                <h1>GAMING STORE</h1>
                <h5>Bienvenido a la mejor Tienda Gaming de la historia</h5>
            </div>
            <div className='banner-container'>
                <div className='container-titulo'>
                </div>
            </div>
        </>
    );
}

export default Presentacion;