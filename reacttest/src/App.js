import { useEffect, useState } from "react";
function App() {
  const [coordinates, setCoordinates] = useState({
    lat: 35.2444908,
    long: 58.464248
  });
  const [cityName, setCityName] = useState("Kashmi");
  const [searchCity, setSearchCity] = useState("");
  const [currentWhether, setWhether] = useState(null);
  const [state, setstate] = useState("Jammu & kashmir");

  useEffect(async () => {
    let whether = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=303001f13ec189ed0a5171c6c707ad81`);
    let data = await whether.json();
    setWhether(data)
    setCityName(searchCity)
  }, [coordinates])

  function handleonChange(e) {
    setSearchCity(e.target.value)
  }
  async function handleClick() {

    let coords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=303001f13ec189ed0a5171c6c707ad81`);
    let result = await coords.json();

    setCoordinates({
      lat: result[0].lat,
      long: result[0].lon
    })
    setstate(result[0].state)
    console.log(result)
  }
  return (
    <div>
      <div className="search">
        <label htmlFor="city">City:
          <input type="text" value={searchCity} onChange={handleonChange} />
        </label>
        <button onClick={handleClick}>Submit</button>
      </div>
      <div className="city">{cityName}</div>
      {currentWhether ?
        <div>
          <div className="state">{state}</div>
          <div className="description"><h1>{currentWhether.weather[0].description}</h1></div>
          <div className="temp"><h1>{currentWhether.main.temp}</h1></div>
          <div className="humidity">{currentWhether.main.humidity}</div>



        </div> : null
      }


    </div >

  );
}

export default App;
