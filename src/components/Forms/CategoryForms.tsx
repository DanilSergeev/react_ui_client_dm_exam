import { useEffect, useState } from 'react';
import classes from './Forms.module.css'
import CategoryService from '../../services/categoryService';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


interface ICategory {
    id: number;
    name: string;
}


const CategoryForms = () => {
    const [category, setCategory] = useState<ICategory[]>([])

    const getCategory = async () => {
        const res = await CategoryService.getCategorys()
        setCategory(res.data)
    }

    useEffect(() => {
        getCategory()
    }, [])

    const delCategory = async (id: number) => {
        await CategoryService.delCategory(id)
        window.location.replace("/");
    }
    const createCategory = async (name: string) => {
        await CategoryService.createCategory(name)
        window.location.replace("/admin");
    }

    const [nameCat, setNameCat] = useState("")

    return (
        <div className={classes.mainForm} >
            <h2>Управление товарами </h2>
            <Form>
                <Form.Group>
                    <Form.Label>Форма создания категорий</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Название категории</Form.Label>
                    <Form.Control value={nameCat} onChange={e => setNameCat(e.target.value)} type="text" placeholder="Название продукта" />
                </Form.Group>
                <Button variant="danger" onClick={() => createCategory(nameCat)}>
                    Создать
                </Button>
            </Form>
            <ul>
                <hr />
                {
                    category.map(item => (
                        <>
                            <li className={classes.listFormProduct}>
                                <p>id: {item.id}</p>
                                <p>Название категории: {item.name}</p>
                                <div>
                                    <Button onClick={() => delCategory(item.id)} variant="danger">Удалить</Button>
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

export default CategoryForms;