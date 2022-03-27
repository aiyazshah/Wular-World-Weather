import { useEffect, useState } from "react";
import Search from "./components/Search";
import Whether from "./components/Whether";
import Header from "./components/Header";
import ExtendedWeather from "./components/ExtendedWeather";
import styled from "styled-components"


function App() {
  const [coordinates, setCoordinates] = useState({
    lat: 35.2444908,
    long: 58.464248
  });
  const [cityName, setCityName] = useState("Kashmi");
  const [searchCity, setSearchCity] = useState("");
  const [currentWhether, setWhether] = useState(null);
  const [state, setstate] = useState("Jammu & kashmir");
  const [fetchcoord, setcoord] = useState(false);
  const [extendedWeather, setExtendedWeather] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let whether = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=303001f13ec189ed0a5171c6c707ad81`);
      let data = await whether.json();
      setWhether(data);
      setCityName(searchCity);
      handleExtendedWeather();
    }
    fetchData();
  }, [coordinates])
  async function handleClick() {
    //City name entered by user is used to get it's coordinates first by following api, later those coordinates are used to fetch whether using other api
    let coords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=303001f13ec189ed0a5171c6c707ad81`);
    let result = await coords.json();
    setcoord(result);
    if (fetchcoord[0] && result) {
      setCoordinates({
        lat: fetchcoord[0].lat,
        long: fetchcoord[0].lon
      })
      setstate(result[0].state)
    }


  }
  async function handleExtendedWeather() {
    let eWeather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.long}&appid=303001f13ec189ed0a5171c6c707ad81`);
    let res = await eWeather.json();
    setExtendedWeather(res);
  }
  return (
    <>
      <Header />
      <Divstyle>
        <div>
          <div>
            <Search searchCity={searchCity} handleClick={handleClick} setSearchCity={setSearchCity} />
            {currentWhether ?
              <div>
                <h1>Current Weather</h1>
                <Whether state={state} cityName={cityName} description={currentWhether.weather[0].description} temp={currentWhether.main.temp} humidity={currentWhether.main.humidity} country={currentWhether.sys.country} icon={currentWhether.weather[0].icon} />
              </div> : null
            }
          </div >
        </div>
        <div id="extw">
          {extendedWeather ?
            (
              <ExtendedWeather extendedWeather={extendedWeather} state={state} cityName={cityName} country={currentWhether.sys.country} />)
            : ""}
        </div>
      </Divstyle>
    </>

  );
}

export default App;

const Divstyle = styled.div`
display: flex;
margin-top: 2rem;
background-color: #bae589;

justify-content: space-around;
h1{
  text-align: center;
}

#extw{
  width: 50%;
  height: 90vh;
  overflow: scroll;
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
}
`