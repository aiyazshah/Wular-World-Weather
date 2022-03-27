import React from 'react'
import styled from "styled-components"
import { Button } from './Styles'

export default function Search({ searchCity, handleClick, setSearchCity }) {
    function handleonChange(e) {
        setSearchCity(e.target.value)

    }
    return (
        <div>
            <Searchstyle>
                <label htmlFor="city"><span>Search City</span>
                    <input type="text" value={searchCity} onChange={handleonChange} />
                </label>
                <Button onClick={handleClick}>Submit</Button>
            </Searchstyle>
        </div>
    )
}
const Searchstyle = styled.div`
margin-left: 1cm;
margin-top: 1cm;
span{
    font-size: 1.5rem;
    padding-right: 1rem;
}
input{
    height: 1.5rem;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1rem;
    border: 2px solid black;
    border-radius: 5px;
    font-weight: bold;
}


`
