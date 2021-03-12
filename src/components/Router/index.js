import React from 'react'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Details from '../Details'
import Home from '../Home'


function RouterApp({location}) {
    
    return (
       
        <Router>
          
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/:name" children={<Details />} />
            </Switch>

        </Router>
    )
}

export default RouterApp