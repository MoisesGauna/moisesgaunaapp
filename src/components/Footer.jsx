import React from 'react'
import './Footer.css';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'



export const Footer = () => {
  return (
    <>
    <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>SOPORTE</h4>
                        <ul>
                            <li><a href="#">Garantia</a></li>
                            <li><a href="#">Seguimiento de productos</a></li>
                            <li><a href="#">Terminos y Condiciones</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>HARDWARE</h4>
                        <ul>
                            <li><a href="#">Placas de video</a></li>
                            <li><a href="#">Procesadores</a></li>
                            <li><a href="#">Memoras Ram</a></li>
                            <li><a href="#">Motheboards</a></li>
                            <li><a href="#">Fuentes</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>COMPUTADORAS</h4>
                        <ul>
                            <li><a href="#">PC GAMER</a></li>
                            <li><a href="#">PC STREAMER</a></li>
                            <li><a href="#">PC WORKSTATION</a></li>
                            <li><a href="#">Notebooks</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4 className='redes'>SIGUENOS</h4>
                        <div class="social-links">
                            <a href="#"><AiFillFacebook  target='_blank' size="35px" /></a>
                            <a href="#"><AiFillLinkedin target='_blank' size="35px" /></a>
                            <a href="#"><AiFillGithub target='_blank' size="35px" /></a>
                            <a href="#"><AiFillTwitterCircle target='_blank' size="35px" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="grupo-2">
            <small>&copy;2023 GamingStore - Todos Los Derechos Reservados</small>
        </div>

        </>

  )
}
export default Footer;