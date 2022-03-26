import { useEffect, useState } from "react";
import Search from "./components/Search";
import Whether from "./components/Whether";
import Header from "./components/Header";
function App() {
  const [coordinates, setCoordinates] = useState({
    lat: 35.2444908,
    long: 58.464248
  });
  const [cityName, setCityName] = useState("Kashmi");
  const [searchCity, setSearchCity] = useState("");
  const [currentWhether, setWhether] = useState(null);
  const [state, setstate] = useState("Jammu & kashmir");
  const [fetchcoord, setcoord] = useState(null);

  useEffect(async () => {
    let whether = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=303001f13ec189ed0a5171c6c707ad81`);
    let data = await whether.json();
    setWhether(data)
    setCityName(searchCity)
  }, [coordinates])


  async function handleClick() {
    //City name entered by user is used to get it's coordinates first by following api, later those coordinates are used to fetch whether using other api
    let coords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=303001f13ec189ed0a5171c6c707ad81`);
    let result = await coords.json();
    setcoord(result);
    setCoordinates({
      lat: fetchcoord[0].lat,
      long: fetchcoord[0].lon
    })
    setstate(result[0].state)

  }
  return (
    <div>
      <Header />
      <Search searchCity={searchCity} handleClick={handleClick} setSearchCity={setSearchCity} />

      {currentWhether ?
        <div>
          <Whether state={state} cityName={cityName} description={currentWhether.weather[0].description} temp={currentWhether.main.temp} humidity={currentWhether.main.humidity} country={currentWhether.sys.country} icon={currentWhether.weather[0].icon} />
        </div> : null
      }


    </div >

  );
}

export default App;
