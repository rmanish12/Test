import React, {Component} from 'react'

import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import Register from './Register'

import '../styles/Homepage.css'

class Homepage extends Component {
    render() {
        return(
            <div>
                <Header/>

                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                </Switch>
            </div>
        )
    }
}

export default Homepage