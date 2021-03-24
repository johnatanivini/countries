import {createGlobalStyle}  from 'styled-components'

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    body {
        background:${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        transition: background .5s linear;
    }

    input, select {
        color: ${({theme})=> theme.text};
        background: ${({theme}) => theme.backgroundElements};
        transition: all .5s linear;
        padding: 10px;
        box-shadow: 0 0px 5px ${({theme}) => theme.colorShadow};
        border-radius: 5px;
        border:none;

        &:focus{
            outline: none;
            box-shadow: 0 2px 5px ${({theme}) => theme.colorShadow};
        }
    }
`