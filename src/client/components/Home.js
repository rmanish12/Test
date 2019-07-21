import React, {Component} from 'react'
import autobind from 'react-autobind'
import {connect} from 'react-redux'

import Admin from './AdminPage'
import User from './UserPage'

import {fetchUserDetails} from '../action/actions'

class Home extends Component {

    constructor(props) {
        super(props)

        autobind(this)
    }

    componentDidMount() {
        this.props.fetchUserDetails()
    }

    displayPage() {
        if(this.props.role==='ADMIN') {
            return <Admin role = {this.props.role}/>
        } else if(this.props.role==='USER') {
            return <User role = {this.props.role}/>
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.displayPage()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.auth.name,
        role: state.auth.role
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchUserDetails: () => dispatch(onFetchUserDetails())
    }
}

export default connect(mapStateToProps)(Home)