import { FC } from 'react';
import classes from './Forms.module.css'

const AllOrdersForms = () => {
    return (
        <div className={classes.mainForm} >
            <h2>Управление заказом</h2>
            <ul>
                <div className={classes.filter}>
                    <p>Филтровать по:</p>
                    <select>
                        <option value="Новые">Новые</option>
                        <option value="Подтвержденные">Подтвержденные</option>
                        <option value="Отмененные">Отмененные</option>
                    </select>
                </div>
                <hr />

                <li className={classes.listFormAllOrder}>
                    <div>
                        <div>Время:</div>
                        <p>ФИО: </p>
                        <p>Товар: </p>
                        <p>Количество: </p>
                    </div>
                    <select>
                        <option value="Новое">Новое</option>
                        <option value="Подтвердить">Подтвердить</option>
                        <option value="Отмененнить">Отмененнить</option>
                    </select>
                </li>
                <hr />
            </ul>
        </div>
    )
};

export default AllOrdersForms;