import classes from './Map.module.css'


const Map = () => {
    return (
        <div className={classes.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2757623918883!2d37.61769581625167!3d55.753711680553586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5759f5b76b%3A0xde502cd817a1b053!2z0JzQsNCy0LfQvtC70LXQuSDQki7QmC4g0JvQtdC90LjQvdCwINC90LAg0JrRgNCw0YHQvdC-0Lkg0L_Qu9C-0YnQsNC00Lg!5e0!3m2!1sru!2sru!4v1679420783729!5m2!1sru!2sru" width="100%" height="450" loading="lazy" title='map'></iframe>
        </div>
    )
};

export default Map;