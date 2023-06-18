import { useEffect, useState } from 'react';
import classes from './Forms.module.css'
import ProductService from '../../services/productService';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CategoryService from '../../services/categoryService';


interface ICategorys {
    id: number,
    name: string
}


const CreateProductsForm = () => {
    const [categorys, setCategorys] = useState<ICategorys[]>([])
    const id = useParams().id


    const Categorys = async () => {
        try {
            const resCat = await CategoryService.getCategorys()
            setCategorys(resCat.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        Categorys()
    }, [])






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

            const res = await ProductService.createProduct(String(id), formData)
            console.log(res)
            window.location.replace("/");
        } catch (error) {
            console.log(error)
        }
    }

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [inStock, setInStock] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [model, setModel] = useState('')
    const [country, setCountry] = useState('')
    const [year, setYear] = useState('')
    const [info, setInfo] = useState('')
    const [img, setImg] = useState('')


    const [checkIsSelect, setCheckIsSelect]= useState(true)
    const checkIsSelectFun = ()=>{
        if(name && price && inStock && categoryId && model && country && year && info && img){
            setCheckIsSelect(false)
        }else{
            setCheckIsSelect(true)
        }
    }


    return (
        <div className={classes.mainForm} >
            <Form onChange={()=>checkIsSelectFun()}>
                <Form.Group>
                    <Form.Label>Форма управления товаром</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Название продукта</Form.Label>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Название продукта" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Цена продукта</Form.Label>
                    <Form.Control value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="Цена продукта" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>В наличие</Form.Label>
                    <Form.Control value={inStock} onChange={e => setInStock(e.target.value)} type="number" placeholder="В наличие" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Категория</Form.Label>
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
                    <Form.Label>Модель</Form.Label>
                    <Form.Control value={model} onChange={e => setModel(e.target.value)} type="text" placeholder="Модель" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Страна производитель</Form.Label>
                    <Form.Control value={country} onChange={e => setCountry(e.target.value)} type="text" placeholder="Страна производитель" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Год производства</Form.Label>
                    <Form.Control value={year} onChange={e => setYear(e.target.value)} type="text" placeholder="Год производства" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Характеристика</Form.Label>
                    <Form.Control value={info} onChange={e => setInfo(e.target.value)} type="text" placeholder="Характеристика" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Изображение: </Form.Label>
                    <br />
                    <Form.Control className='mt-3' onChange={(e: any) => setImg(e.target.files[0])} type="file" placeholder="Характеристика" />
                </Form.Group>

                <Button disabled={checkIsSelect} variant="danger" onClick={() => sendData()}>
                    Создать
                </Button>

            </Form>

        </div>
    )
};

export default CreateProductsForm;