import { useEffect, useState } from 'react';
import classes from './Forms.module.css'
import ProductService from '../../services/productService';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CategoryService from '../../services/categoryService';


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


const UpdataProductsForm = () => {
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



    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [inStock, setInStock] = useState('')
    const [categoryId, setCategoryId] = useState('')

    const [model, setModel] = useState('')
    const [country, setCountry] = useState('')
    const [year, setYear] = useState('')
    const [info, setInfo] = useState('')
    const [img, setImg] = useState('')

    const sendData = async () => {
        try {
            let formData = new FormData()
            formData.append("name", name)
            formData.append("price", price)
            formData.append("inStock", inStock)
            formData.append("categoryId", categoryId)
            formData.append("model", model)
            formData.append("country", country)
            formData.append("year", year)
            formData.append("info", info)
            formData.append("img", img)

            const res = await ProductService.updateProduct(String(id), formData)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const delProduct = async () => {
        try {
            await ProductService.delProduct(Number(id))
            window.location.replace("/");
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={classes.mainForm} >
            <Form>
                <Form.Group>
                    <Form.Label>Форма управления товаром</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Название продукта: {products?.productData.name}</Form.Label>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Название продукта" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Цена продукта: {products?.productData.price}</Form.Label>
                    <Form.Control value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="Цена продукта" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>В наличие: {products?.productData.inStock}</Form.Label>
                    <Form.Control value={inStock} onChange={e => setInStock(e.target.value)} type="number" placeholder="В наличие" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Категория: {products?.categoryData}</Form.Label>
                    <br />
                    <Form.Select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
                        <option value="" disabled>Выберите...</option>
                        {
                            categorys.map(item => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Модель: {products?.productInfoData.model}</Form.Label>
                    <Form.Control value={model} onChange={e => setModel(e.target.value)} type="text" placeholder="Модель" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Страна производитель: {products?.productInfoData.country}</Form.Label>
                    <Form.Control value={country} onChange={e => setCountry(e.target.value)} type="text" placeholder="Страна производитель" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Год производства: {products?.productInfoData.year}</Form.Label>
                    <Form.Control value={year} onChange={e => setYear(e.target.value)} type="text" placeholder="Год производства" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Характеристика: {products?.productInfoData.info}</Form.Label>
                    <Form.Control value={info} onChange={e => setInfo(e.target.value)} type="text" placeholder="Характеристика" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Изображение: </Form.Label>
                    <br />
                    <img className={classes.img} alt={products?.productData.name} src={`${process.env.REACT_APP_API_URL}/${products?.productData.img}`}></img>
                    <Form.Control className='mt-3' onChange={(e: any) => setImg(e.target.files[0])} type="file"  />
                </Form.Group>

                <Button variant="danger" onClick={() => sendData()}>
                    Обновить
                </Button>
                <Button variant="danger ml-2" onClick={() => delProduct()}>
                    Удалить
                </Button>
            </Form>

        </div>
    )
};

export default UpdataProductsForm;