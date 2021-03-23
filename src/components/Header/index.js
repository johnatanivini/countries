import styled from 'styled-components'

import {faMoon} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Wrapper } from '../Wrapper'

const HeaderContainer = styled.div`
    background: ${({theme}) => theme.backgroundElements};
    transition: background .5s linear;
    box-shadow: 0 2px 2px ${({theme}) => theme.colorShadow};
`
const HeaderWrapper = styled.header`

    display:flex;
    flex-flow: row nowrap;
    justify-content:space-evenly;
    font-size: 14px;
    padding: 20px 0;
  

    div {
        flex: 1;

    }

    div:last-child {
        text-align: right;

         span:first-child {
            cursor: pointer;
         }
    }
    
    h1 {
        font-size: 14px;
    }

`

function Header({toggleTheme}) {

    return (
        <HeaderContainer>
            <Wrapper>
                <HeaderWrapper> 
                    <div>
                        <h1>Where in the world?</h1>
                    </div>    
                    <div>
                        <span className="selectMode" onClick={toggleTheme}>
                            <FontAwesomeIcon icon={faMoon} style={{color:''}} /> Mode
                        </span>
                    </div>
                </HeaderWrapper> 
            </Wrapper>
        </HeaderContainer>
    )
}

export default Header