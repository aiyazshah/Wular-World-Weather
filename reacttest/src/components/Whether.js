import React from 'react'
import styled from "styled-components"

export default function Whether(props) {
    return (
        <Whetherstyle>
            <div>
                <div className="city"><span>City:-</span>{props.cityName}</div>
                <div className="state"> <span>State:-</span>{props.state}</div>
                <div className='desc'>
                    <div className="description"><span>Description:-</span>{props.description}</div>
                    <div><img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" /></div>
                </div>

                <div className="temp"><span>Current Temprature:-</span>{props.temp}</div>
                <div className="humidity"><span>Humidity:-</span>{props.humidity}</div>
                <div className="country"><span>Country Code:-</span>{props.country}</div>

            </div>

        </Whetherstyle>
    )
}
const Whetherstyle = styled.div`
display: flex;
margin-left: 1cm;
font-size: 1.5rem;
div{
    margin-top: 2rem;
}
.desc{
    display: flex;
        align-items: center;
}
span{
    color:green;
    font-size: 1.5rem;
    margin-right:1rem;
}
`
