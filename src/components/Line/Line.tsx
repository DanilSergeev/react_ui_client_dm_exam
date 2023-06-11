import { FC } from 'react';
import classes from './Line.module.css'

interface cardProps {
    title: string,
    text?: string
}

const Line: FC<cardProps> = ({ title, text }) => {
    return (
        <div className={classes.line}>
            <div className={classes.lineWrapper}>
                <h1>{title}</h1>
                {
                    text ?
                        <p>{text}</p>
                        :
                        <></>
                }
            </div>

        </div>
    )
};

export default Line;