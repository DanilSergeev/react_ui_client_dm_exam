import UpdataProductsForm from "../components/Forms/UpdataProductsForm"
import Line from "../components/Line/Line"



const UpdataProducts = () => {

    return (
        <main>
            <Line title="Редактирование, удаление продукта" />
            <section className="wrapper mt-5 mb-5">
                <UpdataProductsForm/>
            </section>
        </main >
    )
}
export default UpdataProducts