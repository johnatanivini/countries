import {
    useParams
  } from "react-router-dom";
import { useEffect, useState } from "react";
import { URL_API } from "../../consts";
import DetailCountry from "./DetailCountry";

function Alpha() {

    const {alpha} = useParams()

    const [detail, setDetail] = useState({})

      useEffect(() => {
        
        const getAlpha = async () => {
          await fetch(`${URL_API}/alpha/${alpha}`)
            .then(response => {
              if(response.status === 404){
                return []
              }
              return response.json()
            })
            .then(json => {
              setDetail(json)
            })
        }
  
        getAlpha()
  
      },[alpha])

    return (
       <DetailCountry detail={detail} />
    )
}

export default Alpha

