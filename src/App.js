import { useState } from 'react'
import Map from './Map'
import './App.css'
import places from './places'
import assets from './assets'
import NowReading from './NowReading'

function App() {
  // const [place, setPlace] = useState(null);
  const [map, setMap] = useState(null);

  const setPlace = (p) => {
    p?
      map.panTo(p?.coordinates) :
      map.resetPan()
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      <div className="header">
        <NowReading />
      </div>
      <div className="main">
        <div className="places">
        {
          places.map((p, i) => {
            return (
              <div 
                key={"place-" + i} 
                className="place"
                onMouseEnter={() => setPlace(p)}
                onMouseLeave={() => setPlace(null)}
              >
                <img src={assets[p.img]} alt={p.imgAlt} />
              </div>
            )
          })
        }
        </div>
        <Map 
          places={places}
          onInit={setMap}
        />
      </div>
      <div>Icons made by <a href="https://www.flaticon.com/free-icon/computer_3749784?term=work&page=1&position=15&related_item_id=3749784" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </div>
  );
}

export default App;
