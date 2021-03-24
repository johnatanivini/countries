
import { Wrapper } from "../Wrapper"
import {
    Link
  } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Back = styled.div`

    padding: 10px 0;
    margin: 40px 0;

    a {
            padding: 8px 20px;
            background: ${({theme }) => theme.backgroundElements};
            color: ${({theme}) => theme.text };
            box-shadow: 0 0 3px ${({theme}) => theme.colorShadow};
            text-decoration: none;
            transition: all .2s linear;
            border-radius: 5px;
            

            :hover {
                color: ${({theme }) => theme.backgroundElements};
                background: ${({theme }) => theme.text};
            }
        }


`

const WrapperDetail = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    gap: 5%;
    align-items: center;

    @media (max-width: 980px){
        flex-flow: column wrap;
    }

    h1 {
        font-size: 2em;
        margin-bottom: 30px;
    }

    .section {
        flex: 1;
        width: 100%;
        margin-top: 20px;
    
        img{
            max-width: 100%;
        }
    }

   
`

const DetailCountryStyled = styled.ul`
    display: flex;
    justify-content: stretch;
    align-items: end;
    gap: 5%;

    * {
        font-size: 1em
    }

    li.details {
        display: flex;
        flex-flow: column wrap;
        font-size: 12px !important;

        b{
            margin-right: 5px;
        }

    }

    @media (max-width:980px) {

        flex-flow: column nowrap;

        li.details {
            flex-flow: column nowrap;
        }

        li.details:last-child{
            padding: 20px 0;
            padding-bottom: 0;
        }

    }

`

const Borders = styled.ul`
    display: flex;
    justify-content: stretch;
    align-items: end;
    flex-flow: row wrap;
    
    li:first-child {
        padding-right: 20px;
        margin-top: 20px;
    }

    li {
        display: flex;
        gap: 10px;
        flex-flow: row wrap;

        a {
            padding: 5px;
            background: ${({theme }) => theme.backgroundElements};
            color: ${({theme}) => theme.text };
            box-shadow: 0 0 3px ${({theme}) => theme.colorShadow};
            text-decoration: none;
            transition: all .2s linear;

            :hover {
                color: ${({theme }) => theme.backgroundElements};
                background: ${({theme }) => theme.text};
            }
        } 
        
    }

    li:last-child {
            margin-top: 10px;
            margin-bottom: 50px;
    }

`

function DetailCountry ({detail}) {
    
    return (
        <Wrapper>
        <Back>
            <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft}/> {' Back'} 
            </Link>
        </Back>
        {detail.name && <WrapperDetail>
            
            

            <div className="section" >
                <img src={detail.flag} alt={detail.name} />
            </div>
            <div className="section">
                <h1>{detail.name}</h1>
                <DetailCountryStyled>
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
                </DetailCountryStyled>

                { detail.borders.length > 0 &&<Borders>
                    <li><b>Border Countries:</b> </li>
                    <li>
                        {
                            detail.borders.map((border,key) => {
                                return (
                                    <Link  to={`/alpha/${border}`} key={key}>{border}</Link>
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

export default DetailCountry