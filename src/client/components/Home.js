import React, {Component} from 'react'

import {connect} from 'react-redux'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                Home Page for {this.props.name}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.auth.name
    }
}

export default connect(mapStateToProps)(Home)