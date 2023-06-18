import CarouselMain from "../components/Carousel/CarouselMain"
import Line from "../components/Line/Line"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const HomePage = () => {

    return (
        <main>
            <CarouselMain arrUrl={[
                'https://bogatyr.club/uploads/posts/2023-03/1678108308_bogatyr-club-p-muzikalnaya-studiya-foni-krasivo-31.jpg',
                'https://i.artfile.ru/1920x1080_1346699_[www.ArtFile.ru].jpg',
                'https://million-wallpapers.ru/wallpapers/4/47/17943295428896130785/sv-tlovolosa-skripalka-vikonu-melod-yu.jpg'
            ]}>
                <Card.Body>
                    <Card.Title>dddd</Card.Title>
                    <Card.Text>
                        ffff
                    </Card.Text>
                    <Link to="/auth">
                        <Button variant="danger">Войти</Button>
                    </Link>
                </Card.Body>
            </CarouselMain>

        </main>
    )
}
export default HomePage