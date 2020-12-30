import './NowReading.css'
import assets from './assets'

const NowReading = () => {
    return (
        <div className="now-reading">
            <img src={assets.uncertainty} alt="Uncertainty in games, by Greg Costikyan" />
            <span>
                Uncertainty in games, by Greg Costikyan
            </span>
        </div>
    )
}

export default NowReading;
