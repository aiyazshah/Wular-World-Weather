import React from 'react'
import Whether from './Whether'

export default function ExtendedWeather(props) {
    console.log(props.extendedWeather.list[0]);
    let y = ((new Date()).toISOString()).slice(0, 10);
    console.log(y);
    let pattern = new RegExp(y);
    let today = (props.extendedWeather.list).filter((value) => {
        return pattern.test(value.dt_txt);
    })
    console.log(today)


    console.log(today[0].weather[0].description)
    return (

        <div>
            <h1 style={{ position: 'sticky', top: "20px", background: "light-green" }}>Today</h1>
            {
                today.map((today) =>
                    <>
                        <div style={{ margin: "1rem", width: "100%", height: "2px", background: "black" }}></div>
                        <Whether time={(today.dt_txt).slice(11, 16)} state={props.state} cityName={props.cityName} country={props.country} description={today.weather[0].description} temp={today.main.temp} humidity={today.main.humidity} icon={today.weather[0].icon} />
                    </>
                )
            }

        </div>
    )
}
