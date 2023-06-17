import Line from "../components/Line/Line"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Navigate } from 'react-router-dom';
import logo from "../assets/img/logo.png"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import AuthService from '../services/authService';
import { setRegisterUserAction } from '../store/auth-reduser';
import Alert from 'react-bootstrap/Alert';



const RegisterPage = () => {
    const dispatch = useDispatch()
    const authReduser: any = useSelector<any>(state => state.authReduser);



    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [otchestvo, setOtchestvo] = useState("")
    const [email, setEmail] = useState("")




    const [alertConfig, setAlertConfig] = useState({
        show: false,
        variant: 'danger',
        text: 'Это алерт',
    })



    const sendDataRegister = async () => {
        setAlertConfig(prev => ({ ...prev, show: false }))
        try {
            if (password !== rePassword) {
                return setAlertConfig(prev => ({ ...prev, show: true, text: `Пароли не совпадают`, variant: "warning" }))
            }
            const response = await AuthService.register(login, password, "USER", name, surname, otchestvo, email)
            dispatch(setRegisterUserAction({ ...response, isAuth: true }))
        } catch (error: any) {
            console.log(error)
            if (error?.response?.data?.message !== undefined) {
                setAlertConfig(prev => ({ ...prev, show: true, text: `Ошибка - ${error?.response?.data?.message}`, variant: "danger" }))
            } else {
                setAlertConfig(prev => ({ ...prev, show: true, text: `Ошибка - ${error?.message}`, variant: "danger" }))
            }
        }
    }


    if (authReduser.isAuth) {
        return <Navigate to="/" replace />;
    }




    return (
        <main>
            <Line title="Регистрация" />
            <section className="authSection wrapper display-row mt-5 mb-4">
                <Form>
                    <Form.Group>
                        <Form.Label>Форма регистрации</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Введите логин</Form.Label>
                        <Form.Control value={login} onChange={e => setLogin(e.target.value)} type="email" placeholder="Логин" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Пароль" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Повторите пароль</Form.Label>
                        <Form.Control value={rePassword} onChange={e => setRePassword(e.target.value)} type="password" placeholder="Повторите пароль" />
                    </Form.Group>



                    <Form.Group className="mb-3">
                        <Form.Label>Введите ваше имя</Form.Label>
                        <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Имя" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Введите вашу фамилию</Form.Label>
                        <Form.Control value={surname} onChange={e => setSurname(e.target.value)} type="text" placeholder="Фамилия" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Введите ваше отчество</Form.Label>
                        <Form.Control value={otchestvo} onChange={e => setOtchestvo(e.target.value)} type="text" placeholder="Отчество" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Электронная почта</Form.Label>
                        <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Электронная почта" />
                    </Form.Group>

                    <Button variant="danger" onClick={() => sendDataRegister()}>
                        Зарегистрироватся
                    </Button>

                    <Alert onClick={() => setAlertConfig(prev => ({ ...prev, show: false }))} className="mt-3" show={alertConfig.show} variant={alertConfig.variant}>
                        {alertConfig.text}
                    </Alert>

                </Form>

                <Card className="authCard">
                    <Card.Link className="authCardLinkLogo" as={Link} to="/" ><Card.Img variant="top" src={logo} /></Card.Link>
                    <Card.Body>
                        <Card.Title>Зачем нужна регистрация?</Card.Title>
                        <Card.Text>
                            ааа
                        </Card.Text>
                        <Card.Link as={Link} to="/auth" >Авторизация</Card.Link>
                    </Card.Body>
                </Card>
            </section>

        </main>
    )
}
export default RegisterPage