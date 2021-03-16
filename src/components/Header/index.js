import styled from 'styled-components'

import {faMoon} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const HeaderWrapper = styled.header`

    display:flex;
    flex-flow: row nowrap;
    justify-content:space-evenly;
    font-size: 14px;
    div {
        flex: 1;

    }

    div:last-child {
        text-align: right
    }
    
    h1 {
        font-size: 14px;
    }

`

function Header() {
    return (
        <HeaderWrapper>
            <div>
                <h1>Where in the world?</h1>
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faMoon} style={{color:''}} /> Mode
                </span>
            </div>
        </HeaderWrapper>
    )
}

export default Header