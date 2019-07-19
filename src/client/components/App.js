import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'

import LandingPage from './LandingPage'

class App extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <LandingPage/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App