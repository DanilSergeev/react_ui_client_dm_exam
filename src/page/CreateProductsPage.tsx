import CreateProductsForm from "../components/Forms/CreateProductsForm"
import Line from "../components/Line/Line"



const CreateProductsPage = () => {

    return (
        <main>
            <Line title="Добовление продукта" />
            <section className="wrapper mt-5 mb-5">
                <CreateProductsForm/>
            </section>
        </main >
    )
}
export default CreateProductsPage