import { FC } from 'react';
import classes from './CarouselMain.module.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

interface IcarouselMain {
    /**
     * Принимает массив строк, где строки являются ссылками
     */
    arrUrl: string[],
    /**
     * Рекомендуется использывать react-bootstrap/Card
     * 
     *<Card.Body>
     *  <Card.Title>Заголовок</Card.Title>
     *  <Card.Text>
     *      Добро пожаловать
     *  </Card.Text>
     *  <Link to="/">
     *      <Button variant="danger">Туда</Button>
     *  </Link>
     *</Card.Body>
     * 
     */
    children?: React.ReactChild | React.ReactNode
}


const CarouselMain: FC<IcarouselMain> = ({ arrUrl, children }) => {
    return (
        <div className={classes.main}>

            <Carousel className={classes.carousel} interval={6000} indicators={false} touch={false} controls={false}>
                {
                    arrUrl.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={item}
                                alt={item}
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>

            {
                children ?
                    <div className={classes.cardCarusel}>
                        <Card className={classes.card}>
                            {children}
                        </Card>
                    </div>
                    :
                    <></>
            }
        </div>

    )
};

export default CarouselMain;