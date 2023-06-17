import Line from "../components/Line/Line"
import Map from "../components/Map/Map"
import TextWhereAreWe from "../components/TextWrapper/TextWhereAreWe"



const WhereAreWePage = () => {

    return (
        <main>
            <Line title="Где нас найти?" />
            <section className="wrapper mt-5 mb-5">
                <TextWhereAreWe
                    address="ул. Музыкальная, дом 10, город Москва, Россия"
                    phone="+7 (495) 123-45-67"
                    email="sales@musichouse.com">
                    Ниже приведены наши контактные данные. Мы будем рады ответить на любые вопросы, связанные с продукцией Music House и помочь вам выбрать самое подходящее оборудование для вашей музыкальной студии или концертной площадки. Свяжитесь с нами по телефону или отправьте электронное письмо, и наша команда оперативно ответит вам.
                </TextWhereAreWe>
            </section>
            <Map></Map>
        </main >
    )
}
export default WhereAreWePage