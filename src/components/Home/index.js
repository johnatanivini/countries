import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { Wrapper } from '../Wrapper'
import {Link} from 'react-router-dom'

const URL_API = 'https://restcountries.eu/rest/v2'

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']



const Filters = styled.div`

    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom:25px;

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
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 25px;

    .item {
      flex:1;
      flex-basis: 22%;
      border: solid 1px #ebebeb;
      box-shadow: 0 0 4px #ccc;
      overflow:hidden;
      border-radius: 5px;
      align-self:stretch;

      .item-body {
        padding: 10px;

        h3{
          font-size: 14px;
          padding: 10px 0
        }

      }

    }

    .img {

      min-height: 105px;
      display: flex;

      img {  
        max-height: fit-content;
        max-width: 100%;
        border: solid transparent 1px;
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

    }

`
function  Home () {

    const [paises, setPaises] = useState([])
    const [regiao, setRegiao] = useState('Americas')
    const [pais, setPais] = useState('')

    useEffect(() => {

      const getPaises = async () => {
        await fetch(`${URL_API}/region/${regiao}`)
          .then(response => {
            if(response.status === 404){
                return []
            }
            return response.json()
          })
          .then(json => {
            setPaises(json)
          })
    }      

    getPaises()

    },[regiao]) 

    useEffect(() => {

      const getPais = async () => {
        await fetch(`${URL_API}/name/${pais}`)
          .then(response => {
            if(response.status === 404){
              return []
            }
            return response.json()
          })
          .then(json => {
            setPaises(json)
          })
      }

      getPais()

    },[pais])

    return (

    <Wrapper>

        <Header />

        <Filters>
            <div className="item">
                <input type="search" name="country" onChange={event => setPais(event.target.value)}  />
            </div>
            <div className="item">
                <select name="region" onChange = { event => setRegiao(event.target.value)}>
                <option>Select a region</option>  
                {
                  REGIONS.map((regionSelect, index) => {
                    return (
                      <option value={regionSelect} key={index} >{regionSelect}</option>
                    )
                  })
                }  
               
                </select>
            </div>
        </Filters>

        <Paises>
        {
            paises.map(function(country, index){
                return (
                <div className="item" key={index}>

                    <Link to={`/${country.name}`} className="img">
                      <img src={country.flag} alt={country.region}/>
                    </Link>
                    <div className="item-body">
                      <h3>{country.name}</h3>
                      <p>Population: {country.population}</p>
                      <p>Region: {country.region}</p>
                      <p>Capital: {country.capital}</p>
                    </div>
                </div>
                )
            })
        }
        {paises.length === 0 && <div className="item">
            <div className="item-body">
              <h3>Error 404!</h3>
              <p>Country not found!</p>
            </div>
          </div>}
        </Paises>

    </Wrapper>
    )
}


export default Home