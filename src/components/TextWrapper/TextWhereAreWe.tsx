import React, { FC } from "react"



interface IProps {
    children?: React.ReactNode,
    /** 
     * Адрес
    */
    address: string,
    /** 
    * Номер телефона
     */
    phone: string,
    /** 
     * Электронная почта
    */
    email: string,
}

const TextWhereAreWe: FC<IProps> = ({ children, address, phone, email }) => {

    return (
        <div>
            <div>{children}<br/><br/></div>
            <p>Адрес: {address}</p>
            <p>Номер телефона: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}
export default TextWhereAreWe