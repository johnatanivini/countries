import React from 'react';
import './index.css';
import styled from 'styled-components';
import Header from './components/Header';
import { Countries } from './json';

const Wrapper =  styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  padding: 0 20% 0;
`

const Filters = styled.div`

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    .item {
      flex: 1;
    }

    .item:last-child {
      text-align: right;
    }

`
const Paises = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    .item {
      flex:1;
    }

    .img {

      img {  
        max-height: fit-content;
        max-width: 100%;
        border: solid transparent 1px;
      }

    }

`

function  App () {
    return (

    <Wrapper>

        <Header />

        <Filters>
            <div className="item">
                <input type="search" name="country" />
            </div>
            <div className="item">
                <select name="region">
                <option>Região 1</option>
                <option>Região 2</option>
                <option>Região 3</option>
                <option>Região 3</option>
                </select>
            </div>
        </Filters>

        <Paises>
        {
            Countries.map(function(country){
                return (
                <div className="item">
                    <div className="img">
                    <img src={country.flag} alt={country.region}/>
                    </div>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
                )
            })
        }
        </Paises>

    </Wrapper>
    )
}


export default App