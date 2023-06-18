import CardCatalog from "../components/Card/CardCatalog"
import Line from "../components/Line/Line"


const CatalogPage = () => {



    return (
        <main>
            <Line title="Каталог" text="Полный ассортимент музыкального оборудования от ведущих производителей в Music House" />
            <section className="wrapper mb-5">
                <CardCatalog />
            </section>
        </main>
    )
}
export default CatalogPage