import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/img/logo.png"

const Header = () => {

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to="/" className='link_a' ><img src={logo} alt="logo" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/aboutUs">Features</Nav.Link>
                            <Nav.Link as={NavLink} to="/aboutUs">Pricing</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link as={NavLink} to="/auth">Авторизация</Nav.Link>
                            <Nav.Link as={NavLink} to="/register">Регистрация</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header