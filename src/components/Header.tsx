import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/img/logo.png"
import AuthService from '../services/authService';
import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from '../store/auth-reduser';


const Header = () => {
    const dispatch = useDispatch()
    const authReduser: any = useSelector<any>(state => state.authReduser);

    const logoutFun = async () => {
        try {
            const response = await AuthService.logout()
            dispatch(logoutAction(response))
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to="/" className='link_a' ><img src={logo} alt="logo" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/aboutus">О нас</Nav.Link>
                            <Nav.Link as={NavLink} to="/catalog">Каталог</Nav.Link>
                            <Nav.Link as={NavLink} to="/where_are_we">Где нас найти?</Nav.Link>
                        </Nav>

                        <Nav>
                            {
                                authReduser.isAuth ?

                                    <>
                                        {
                                            authReduser.role === "ADMIN" ?
                                                <Nav.Link as={NavLink} to="/admin">Админка</Nav.Link>
                                                :
                                                <Nav.Link as={NavLink} to={`/basket/${authReduser.id}`}>Корзина</Nav.Link>
                                        }
                                        <Nav.Link onClick={() => logoutFun()} href="#">Выйти с {authReduser.email.substr(0, 12)}</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={NavLink} to="/auth">Авторизация</Nav.Link>
                                        <Nav.Link as={NavLink} to="/register">Регистрация</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header