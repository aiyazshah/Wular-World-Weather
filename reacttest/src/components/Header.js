import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import styled from "styled-components";

export default function Header() {

    return (
        <Headerstyle>

            <div>
                <h1> <span>Wular</span> World Weather</h1>
            </div>
            <div className="icon"><TiWeatherPartlySunny size={50} /></div>

        </Headerstyle>
    )
}
const Headerstyle = styled.div`
border:2px solid red;
margin-left: 1cm;
font-family: 'Lobster';
display: flex;
span{
    color: green;
}
`