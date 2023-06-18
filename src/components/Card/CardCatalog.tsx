import classes from './CardCatalog.module.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import ProductService from '../../services/productService';
import CategoryService from '../../services/categoryService';
import { Link } from 'react-router-dom';




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

const CardCatalog = () => {
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
        <div className={classes.catalogMain}>
            <h2 className='mt-5 '>Ассортимент </h2>
            <div className={classes.cardcolumns}>
                {
                    products.filter(item=> item.inStock !== 0).map(item => (
                        <Card className={classes.cardsGap} key={item.id} style={{ width: '18rem' }}>
                            <Card.Img className={classes.img} variant="top" src={`${process.env.REACT_APP_API_URL}/${item.img}`} />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text >
                                    <b>
                                        Цена: {item.price}
                                    </b>
                                    <br />
                                    Категория: {item.categoryName}
                                    <br />
                                    Описание: {item.productInfoName.info.slice(0, 197) + "..."}
                                </Card.Text>
                                <Link to={`/product/${item.id}`}>
                                    <Button variant="danger">Подробние</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>

    )
};

export default CardCatalog;