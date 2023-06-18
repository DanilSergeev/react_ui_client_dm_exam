import Line from "../components/Line/Line"
import { useEffect, useState } from 'react';
import ProductService from '../services/productService';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CategoryService from '../services/categoryService';




interface IProductData {
    id: number,
    name: string,
    price: string,
    img: string,
    inStock: number,
    categoryId: number,
    productInfoId: number
}
interface IProductInfoData {
    id: number,
    model: string,
    country: string,
    year: string,
    info: string
}

interface IProduct {
    productData: IProductData,
    categoryData: string,
    productInfoData: IProductInfoData,
}
interface ICategorys {
    id: number,
    name: string
}



const ProductCheck = () => {
    const [products, setProducts] = useState<IProduct>()
    const [categorys, setCategorys] = useState<ICategorys[]>([])
    const id = useParams().id


    const getProduct = async () => {
        try {
            const resCat = await CategoryService.getCategorys()
            setCategorys(resCat.data)
            const res = await ProductService.getProduct(Number(id))
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])




    return (
        <main>
            <Line title="Товар" />
            <section className="wrapper mt-5 mb-5">
                <div className="disFlex ProductCheck">
                    <img src={`${process.env.REACT_APP_API_URL}/${products?.productData.img}`} alt={products?.productData.name} />
                    <div>
                        <h3>Название продукта: {products?.productData.name}</h3>
                        <p><b>Цена: {products?.productData.price}₽</b></p>
                        <p>В наличие: {products?.productData.inStock}₽</p>
                        <p>Категория: {products?.categoryData}</p>
                        <p>Страна производитель: {products?.productInfoData.country}</p>
                        <p>Модель: {products?.productInfoData.model}</p>
                        <p>Год производства: {products?.productInfoData.year}</p>
                        <p>Описание: {products?.productInfoData.info}</p>
                        <Button variant="danger">Добавить в корзину</Button>
                    </div>
                </div>
            </section>
        </main >
    )
}
export default ProductCheck