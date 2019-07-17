import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'

import HomePage from './Homepage'

class App extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <HomePage/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App