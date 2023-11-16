import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import Logo from '../assets/img/Logo.png';







const Barranav = () => {

    return (
        <>
            <Navbar expand="lg" className="barra-gral">
                <Container className="barra ">
                    <img className='logo1' src= {Logo} alt="logo empresa" />    
                    <Navbar.Brand href="/" className='barra-brand'>GamingStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" id='link'>Home</Nav.Link>
                            <Nav.Link href="/home" id='link'>Productos</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item id="category" href="/category/gabinete">Gabinetes</NavDropdown.Item>
                                <NavDropdown.Item id="category" href="/category/placa">Placas de Video</NavDropdown.Item>
                                <NavDropdown.Item id="category" href="/category/mother">Motherboard</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

        </>
    );
}

export default Barranav;