import CarouselMain from "../components/Carousel/CarouselMain"
import Line from "../components/Line/Line"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const HomePage = () => {

    return (
        <main>
            <Line title="Главная страница" text="dawdawd" />
            <CarouselMain arrUrl={[
                'https://img1.akspic.ru/attachments/crops/5/3/3/4/0/104335/104335-gornyj_relef-stena-gornaya_derevnya-derevo-gora-1920x1080.jpg',
            ]}>
                <Card.Body>
                    <Card.Title>Квалифицированная помощь онлайн</Card.Title>
                    <Card.Text>
                        Добро пожаловать в нашу компанию, которая предоставляет медицинские консультации с помощью видеосвязи. Мы стремимся сделать медицинскую помощь максимально доступной и удобной для каждого пациента.
                    </Card.Text>
                    <Link to="/videoRooms">
                        <Button variant="danger">К комноте</Button>
                    </Link>
                </Card.Body>
            </CarouselMain>

        </main>
    )
}
export default HomePage