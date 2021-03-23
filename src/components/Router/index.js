import React, { useState } from 'react'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Details from '../Details'
import Alpha from '../Details/Alpha'
import Home from '../Home'
import { ThemeProvider } from 'styled-components';
//eslint-disable-next-line
import { GlobalCss } from '../GlobalStyled'
import { darKTheme, lightTheme } from '../../theme'
import Header from '../Header'


function RouterApp({location}) {
    
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
            <ThemeProvider theme={theme === 'light' ? lightTheme : darKTheme}>
                <>
                <Header toggleTheme = {themeToggler} />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/country/:name" children={<Details />} />
                        <Route path="/alpha/:alpha" children={<Alpha />} />
                    </Switch>
                </Router>
                <GlobalCss />
                </>
            </ThemeProvider>        
    )
}

export default RouterApp