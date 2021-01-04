import { useState } from 'react'
import Map from './Map'
import './App.css'
import places from './places'
import assets from './assets'
import NowReading from './NowReading'
import TechStack from './TechStack'

function App() {
  // const [place, setPlace] = useState(null);
  const [map, setMap] = useState(null);

  const setPlace = (p) => {
    p ?
      map.panTo(p?.coordinates) :
      map.resetPan()
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Hi :)</h1>
        <NowReading />
      </div>
      <div className="main">
        <Map
          places={places}
          onInit={setMap}
        />
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
      </div>
      <div className="footer">
        <TechStack />
        <div className="footer-links">
          <p>
            Source code available at
            <a href="https://github.com/IgorVanian/iva">
              <div className="footer-links-image">
                <img src={assets.github} />
              </div>
            </a>
          </p>
          <div></div>
        </div>
        <p>
          Credits:
          Icons made by <a href="https://www.flaticon.com/free-icon/computer_3749784?term=work&page=1&position=15&related_item_id=3749784" title="monkik">monkik</a> & <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </p>
      </div>

    </div>
  );
}

export default App;
