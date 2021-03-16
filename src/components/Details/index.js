import Header from "../Header"
import { Wrapper } from "../Wrapper"
import {
    Link,
    useParams
  } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { URL_API } from "../../consts";

const WrapperDetail = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    gap: 5%;
    align-items: center;

    h1 {
        font-size: 16px;
        margin-bottom: 30px;
    }

    .section {
        flex: 1;
    
        img{
            max-width: 100%;
        }
    }

`

const DetailCountry = styled.ul`
    display: flex;
    justify-content: stretch;
    align-items: end;
    gap: 5%;

    li.details {
        display: flex;
        flex-flow: column wrap;

        b{
            margin-right: 5px;
        }

    }
`

const Borders = styled.ul`
    display: flex;
    justify-content: stretch;
    align-items: end;
    
    li:first-child {
        padding-right: 20px;
        width: 8vw;
    }

    li {
        display: flex;
        gap: 10px;

        span {
            padding: 5px;
            background: #ff9900;
        }

    }

`

function Details() {

    const {name} = useParams()

    const [detail, setDetail] = useState({})

    useEffect(() => {

        const getPais = async () => {
          await fetch(`${URL_API}/name/${name}`)
            .then(response => {
              if(response.status === 404){
                return []
              }
              return response.json()
            })
            .then(json => {
              setDetail(json[0])
            })
        }
  
        getPais()
  
      },[name])

    return (
        <Wrapper>

            <Header />

            <Link className="button" to="/">
                Back
            </Link>

            {detail.name && <WrapperDetail>
                <div className="section" >
                    <img src={detail.flag} alt={detail.name} />
                </div>
                <div className="section">
                    <h1>{detail.name}</h1>
                    <DetailCountry>
                        <li className="detail">
                            <ul>
                                <li><b>Native name:</b> {detail.nativeName}</li>
                                <li><b>Population:</b> {detail.population}</li>
                                <li><b>Region:</b> {detail.region}</li>
                                <li><b>Sub Region:</b> {detail.subregion}</li>
                                <li><b>Capital:</b> {detail.capital}</li>
                            </ul>
                        </li>
                        <li className="details">
                            <ul>
                                <li><b>Top Level Domain:</b> {detail.topLevelDomain.map((domain, key) => {
                                        return (
                                            <span key={key}>{domain}</span>
                                        )
                                    })}</li>
                                <li><b>Currencies:</b> 
                                {detail.currencies.map((currency, key) => {
                                    return (
                                        <span key={key}>{currency.code}</span>
                                    )
                                })}
                                </li>
                                <li><b>Languages</b>: {detail.languages.map((language, key) => {
                                    return (
                                        <span key={key}>{`${language.nativeName}, `}</span>
                                    )
                                })}</li>
                            </ul>
                        </li>
                    </DetailCountry>

                    { detail.borders.length > 0 &&<Borders>
                        <li><b>Border Countries:</b> </li>
                        <li>
                            {
                                detail.borders.map((border,key) => {
                                    return (
                                        <Link  to={`/${border}`} key={key}>{border}</Link>
                                    )
                                })
                            }
                        </li>
                    </Borders> }
                </div>


            </WrapperDetail> }
            
        </Wrapper>
    )
}

export default Details

