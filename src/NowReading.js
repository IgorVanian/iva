import './NowReading.css'
import assets from './assets'

const NowReading = () => {
    return (
        <div className="now-reading">
            <img src={assets.uncertainty} alt="Uncertainty in games, by Greg Costikyan" />
            <div>
                Now reading: <br />
                Uncertainty in games, by Greg Costikyan
            </div>
        </div>
    )
}

export default NowReading;
