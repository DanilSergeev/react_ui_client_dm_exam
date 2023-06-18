import classes from './CarouselMain.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import ProductService from '../../services/productService';
import CategoryService from '../../services/categoryService';

interface IProduct {
    id: number;
    name: string;
    price: string;
    img: string;
    inStock: number;
    createdAt: string;
    updatedAt: string;
    categoryId: number;
    productInfoId: number;
    categoryName: string;
    productInfoName: {
        id: number;
        model: string;
        country: string;
        year: string;
        info: string;
    }
}
interface ICategorys {
    id: number,
    name: string
}


const CarouselAbout = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [categorys, setCategorys] = useState<ICategorys[]>([])

    const getProduct = async () => {
        try {
            const resCat = await CategoryService.getCategorys()
            setCategorys(resCat.data)
            const res = await ProductService.getProducts()
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])


    return (
        <div className={classes.main}>

            <Carousel className={classes.carousel} interval={6000} touch={false}>
                {
                    products.map((item, index) => (

                        <Carousel.Item className={classes.cardAbout} key={index}>
                            <img src={`${process.env.REACT_APP_API_URL}/${item.img}`} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>
                                <b>
                                    Цена:{item.price}
                                </b>
                            </p>
                            <Link to={`/product/${item.id}`}>
                                <Button variant="danger">Подробние</Button>
                            </Link>
                        </Carousel.Item>
                    )).reverse()
                }
            </Carousel>

        </div>

    )
};

export default CarouselAbout;