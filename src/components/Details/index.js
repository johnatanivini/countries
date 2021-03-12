import Header from "../Header"
import { Wrapper } from "../Wrapper"
import {
    Link,
    useParams
  } from "react-router-dom";

function Details() {

    const {name} = useParams()

    return (
        <Wrapper>
            <Header />
            <Link to="/">
                Back
            </Link>
            <h1>{name}</h1>
        </Wrapper>
    )
}

export default Details

