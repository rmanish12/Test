import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'

import RoutingPage from './RoutingPage'

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <RoutingPage/>
            </BrowserRouter>
        )
    }
}

export default App