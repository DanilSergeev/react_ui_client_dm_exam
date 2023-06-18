import CarouselAbout from "../components/Carousel/CarouselAbout"
import Line from "../components/Line/Line"



const AboutUsPage = () => {

    return (
        <main>
            <Line title="О нас" text="Мы делаем музыку доступной: о компании Music House и нашей миссии" />
            <section className="wrapper mt-5 mb-5">
                <CarouselAbout/>
            </section>
        </main>
    )
}
export default AboutUsPage