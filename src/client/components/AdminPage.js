import React, {Component} from 'react'

class Admin extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                Welcome {this.props.role}
            </React.Fragment>
        )
    }
}

export default Admin