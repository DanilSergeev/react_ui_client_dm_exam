import AllOrdersForms from "../components/Forms/AllOrdersForms"
import CategoryForms from "../components/Forms/CategoryForms"
import ProductsForms from "../components/Forms/ProductsForms"
import Line from "../components/Line/Line"



const AdminPage = () => {

    return (
        <main>
            <Line title="Админка" />
            <section className="wrapper mt-5">
                <AllOrdersForms/>
            </section>  
            <section className="wrapper mt-5">
                <ProductsForms/>
            </section>
            <section className="wrapper mt-5">
                <CategoryForms/>
            </section>
        </main>
    )
}
export default AdminPage