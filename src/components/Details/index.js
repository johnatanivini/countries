import {
    useParams
  } from "react-router-dom";
import { useEffect, useState } from "react";
import { URL_API } from "../../consts";
import DetailCountry from "./DetailCountry";

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
       <DetailCountry detail={detail} />
    )
}

export default Details

