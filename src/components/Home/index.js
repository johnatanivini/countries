import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Wrapper } from '../Wrapper'
import {Link} from 'react-router-dom'
import { REGIONS, URL_API } from '../../consts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const Filters = styled.div`

    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom:25px;
    padding:20px 0;

    .item {
      flex: 1;
    }

    .item:last-child {
      text-align: right;
    }

    .searchInput {
      position: relative;

      input {
        padding-left: 32px;
      }

      .faSearch{
        padding:10px;
        position: absolute;
        color: ${({theme}) => theme.text};
      }

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
      justify-content: center;

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
          <Filters>
              <div className="item">
                  <div class="searchInput">
                    <div className="faSearch">
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input type="search" name="country" placeholder="Search" onChange={event => {
                        if(event.target.value.trim() === ''){
                          return;
                        }
                        setPais(event.target.value)
                      }}  />
                  </div>
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

                      <Link to={`/country/${country.name}`} className="img">
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
                <h3>Info</h3>
                <p>No country found</p>
                <Link to="/">Back</Link>
              </div>
            </div>}
          </Paises>
      </Wrapper>
    )
}


export default Home