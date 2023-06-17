import Line from "../components/Line/Line"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Navigate } from 'react-router-dom';
import logo from "../assets/img/logo.png"
import { useState } from "react";
import AuthService from "../services/authService"
import Alert from 'react-bootstrap/Alert'
import { useDispatch, useSelector } from "react-redux"
import { setLoginUserAction } from "../store/auth-reduser";



  

const AuthPage = () => {
    const dispatch = useDispatch()
    const authReduser:any = useSelector<any>(state => state.authReduser);


    const [alertConfig, setAlertConfig] = useState({
        show: false,
        variant: 'danger',
        text: 'Это алерт',
    })

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")



    const sendData = async () => {
        try {
            const response = await AuthService.login(login, password)
            dispatch( setLoginUserAction({...response, isAuth: true}))
            setAlertConfig({
                show: true,
                variant: 'success',
                text: `Успех`
            })

        } catch (error: any) {
            console.log(error)
            if(error?.response?.data?.message !== undefined){
                setAlertConfig({
                    show: true,
                    variant: 'danger',
                    text: `Ошибка - ${error?.response?.data?.message}`,
                })
            }else{
                setAlertConfig({
                    show: true,
                    variant: 'danger',
                    text: `Ошибка - ${error?.message}`,
                })
      
            }
        }
    }


    if (authReduser.isAuth) {
        return <Navigate to="/" replace />;
    }

    return (
        <main>
            <Line title="Авторизация" />

            <section className="authSection wrapper display-row mt-5 mb-4">
                <Form>
                    <Form.Group>
                        <Form.Label>Форма авторизации</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Электронный адрес</Form.Label>
                        <Form.Control value={login} onChange={e => setLogin(e.target.value)} type="email" placeholder="Логин" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
                    </Form.Group>
                    <Button variant="danger" onClick={() => sendData()}>
                        Войти
                    </Button>
                    <Alert onClick={() => setAlertConfig(prev => ({...prev, show: false}))} className="mt-3" show={alertConfig.show} variant={alertConfig.variant}>
                        {alertConfig.text}
                    </Alert>
                </Form>

                <Card className="authCard">
                    <Card.Link className="authCardLinkLogo" as={Link} to="/" ><Card.Img variant="top" src={logo} /></Card.Link>
                    <Card.Body>
                        <Card.Title>Зачем нужна регистрация?</Card.Title>
                        <Card.Text>
                            ккк
                        </Card.Text>
                        <Card.Link as={Link} to="/register" >Зарегистрироватся</Card.Link>
                    </Card.Body>
                </Card>
            </section>
        </main>
    )
}
export default AuthPage