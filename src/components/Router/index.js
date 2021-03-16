import React from 'react'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Details from '../Details'
import Alpha from '../Details/Alpha'
import Home from '../Home'


function RouterApp({location}) {
    
    return (
       
        <Router>
          
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/country/:name" children={<Details />} />
                <Route path="/alpha/:alpha" children={<Alpha />} />
            </Switch>

        </Router>
    )
}

export default RouterApp