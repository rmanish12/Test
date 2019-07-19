import {LOGIN, REGISTER} from './types'

import axios from 'axios'

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*"
}

export const onLogin = (email, password) => dispatch => {
    console.log('Action: email: ', email, ' password: ', password)

    axios.post('http://localhost:8000/api/login', {email, password}, headers)
        .then((data) => {
            dispatch({
                type: LOGIN,
                payload: {
                    name: data.user.name
                }
            })
        })
}

export const onRegister = dispatch => {
    return {
        type: REGISTER
    }
}