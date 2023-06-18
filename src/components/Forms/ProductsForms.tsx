import { useEffect, useState } from 'react';
import classes from './Forms.module.css'
import { Link } from 'react-router-dom';
import ProductService from '../../services/productService';


interface IProduct {
    id: number;
    name: string;
    price: number;
    category: string;
    categoryName: string;
    inStock: boolean;
    img: string;
}


const ProductsForms = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const getProducts = async () => {
        const res = await ProductService.getProducts()
        setProducts(res.data)
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div className={classes.mainForm} >
            <h2>Управление товарами </h2>
                <Link  to="/create_products">Добавить продукт</Link>
            <ul>
                <hr />
                {
                    products.map(item => (
                        <>
                            <li className={classes.listFormProduct}>
                                <img src={`${process.env.REACT_APP_API_URL}/${item.img}`} alt={item.name}></img>
                                <div>
                                    <p>Название продукта: {item.name}</p>
                                    <p>Цена {item.price}</p>
                                    <p>Категория: {item.categoryName}</p>
                                    <p>В наличие: {item.inStock}</p>
                                    <Link to={`/updata_products/${item.id}`}>Редактировать</Link>

                                </div>
                            </li>
                            <hr />
                        </>
                    ))
                }
            </ul>
        </div>
    )
};

export default ProductsForms;