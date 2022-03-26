import React from 'react'
import styled from "styled-components"

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
                <button onClick={handleClick}>Submit</button>
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
button{
    margin-left: 1.5rem;
    height: 2rem;
    padding: 0 1rem;
   
    outline: 1px gray;
  border:2px solid green;
  border-radius:4px; 
  font-weight: bold;   
 &:hover{
background-color: green;
color:white;
 }
}
`
